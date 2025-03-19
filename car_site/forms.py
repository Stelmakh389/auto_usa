import json

from django import forms
from django.forms import Media, widgets

from car_site.models import UsaPaymentFile, EuropePaymentFile, KoreaPaymentFile, AuctionData, UsaPlatform


class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True


class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if isinstance(data, (list, tuple)):
            result = [single_file_clean(d, initial) for d in data]
        else:
            result = single_file_clean(data, initial)
        return result


class UsaPaymentForm(forms.ModelForm):
    file = MultipleFileField

    class Meta:
        model = UsaPaymentFile
        fields = ['file']
        widgets = {'card': forms.HiddenInput}


class KoreaPaymentForm(forms.ModelForm):
    class Meta:
        model = KoreaPaymentFile
        fields = ['file']
        widgets = {'card': forms.HiddenInput}


class EuropePaymentForm(forms.ModelForm):
    class Meta:
        model = EuropePaymentFile
        fields = ['file']
        widgets = {'card': forms.HiddenInput}


class RestrictedSelect(widgets.Select):
    @property
    def media(self):
        media = super().media
        media += Media(js=["js/restricted-model-choice-field.js"])
        return media


class BoundRestrictedModelChoiceField(forms.BoundField):
    def get_restrictions(self):
        restrictions = {}

        restrict_on_form_field = self.form.fields[self.field.restrict_on_form_field]
        # Можно оптимизировать
        for restricting_object in restrict_on_form_field.queryset:
            allowed_objects = self.field.queryset.filter(**{self.field.restrict_on_relation: restricting_object})
            for obj in allowed_objects:
                restrictions.setdefault(obj.id, set()).add(restricting_object.id)

        return restrictions

    def build_widget_attrs(self, attrs, widget=None):
        attrs = super().build_widget_attrs(attrs, widget)

        restrictions = self.get_restrictions()
        restrictions = {k: [str(v) for v in vs] for k, vs in restrictions.items()}
        attrs["data-restrictions"] = json.dumps(restrictions)

        bound_restrict_on_form_field = self.form[self.field.restrict_on_form_field]
        attrs["data-restricted-on"] = bound_restrict_on_form_field.html_name

        return attrs


class RestrictedModelChoiceField(forms.ModelChoiceField):
    widget = RestrictedSelect

    def __init__(self, *args, restrict_on_form_field: str = None, restrict_on_relation: str = None, **kwargs):
        super().__init__(*args, **kwargs)

        if not restrict_on_form_field:
            raise ValueError("restrict_on_form_field is required")
        self.restrict_on_form_field = restrict_on_form_field

        if not restrict_on_relation:
            raise ValueError("restrict_on_relation is required")
        self.restrict_on_relation = restrict_on_relation

    def get_bound_field(self, form, field_name):
        return BoundRestrictedModelChoiceField(form, self, field_name)


class AuctionDataForm(forms.ModelForm):
    class Meta:
        model = AuctionData
        fields = "__all__"

    platform = RestrictedModelChoiceField(
        UsaPlatform.objects.all(),
        restrict_on_form_field="auction",
        restrict_on_relation="usaallowedcombination__auction",
    )
