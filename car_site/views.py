from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.postgres.search import SearchVector
from django.shortcuts import get_object_or_404, redirect, render
from django.views.generic import (
    ListView,
    DetailView, )
from django.views.generic.edit import FormView

from .forms import UsaPaymentForm, KoreaPaymentForm, EuropePaymentForm
from .models import UsaCard, KoreaCard, EuropeCard, UsaPaymentFile, KoreaPhoto, KoreaPaymentFile, EuropePhoto, \
    EuropePaymentFile, UserBalance


class LWMLoginView(LoginView):
    template_name = 'registration/login.html'


class LWMLogoutView(LoginRequiredMixin, LogoutView):
    template_name = 'registration/logout.html'


class UsaCardListView(ListView):
    model = UsaCard
    template_name = 'car_site/usa/card_list.html'
    paginate_by = 50

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get("q")
        if query:
            return UsaCard.objects.annotate(
                search=SearchVector(
                    "vin_number",
                    "model",
                    "auction_data__auction__name",
                    "auction_data__user_name",
                    "auction_data__container_number",
                    "auction_data__lot_number",
                    "payment__port"
                )
            ).filter(
                search=query
            ).filter(
                user=user.id
            ).order_by("-date_created")
        else:
            return UsaCard.objects.filter(user=user.id).order_by("-date_created")


class UsaPaymentListView(ListView):
    model = UsaCard
    template_name = 'car_site/usa/payment_list.html'
    paginate_by = 50

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get("q")
        if query:
            return UsaCard.objects.annotate(
                search=SearchVector(
                    "vin_number",
                    "model",
                    "auction_data__auction__name",
                    "auction_data__user_name",
                    "auction_data__container_number",
                    "auction_data__lot_number",
                )
            ).filter(
                search=query
            ).filter(
                user=user.id
            ).order_by("-date_created")
        else:
            return UsaCard.objects.filter(user=user.id).order_by("-date_created")


class KoreaCardListView(ListView):
    model = KoreaCard
    template_name = 'car_site/korea/card_list.html'
    paginate_by = 50

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get("q")
        if query:
            return KoreaCard.objects.annotate(
                search=SearchVector(
                    "vin_number",
                    "model",
                )
            ).filter(
                search=query
            ).filter(
                user=user.id
            ).order_by("-date_created")
        else:
            return KoreaCard.objects.filter(user=user.id).order_by("-date_created")


class KoreaPaymentListView(ListView):
    model = KoreaCard
    template_name = 'car_site/korea/payment_list.html'
    paginate_by = 50

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get("q")
        if query:
            return KoreaCard.objects.annotate(
                search=SearchVector(
                    "vin_number",
                    "model",
                )
            ).filter(
                search=query
            ).filter(
                user=user.id
            ).order_by("-date_created")
        else:
            return KoreaCard.objects.filter(user=user.id).order_by("-date_created")


class EuropeCardListView(ListView):
    model = EuropeCard
    template_name = 'car_site/europe/card_list.html'
    paginate_by = 50

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get("q")
        if query:
            return EuropeCard.objects.annotate(
                search=SearchVector(
                    "vin_number",
                    "model",
                )
            ).filter(
                search=query
            ).filter(
                user=user.id
            ).order_by("-date_created")
        else:
            return EuropeCard.objects.filter(user=user.id).order_by("-date_created")


class EuropePaymentListView(ListView):
    model = EuropeCard
    template_name = 'car_site/europe/payment_list.html'
    paginate_by = 50

    def get_queryset(self):
        user = self.request.user
        query = self.request.GET.get("q")
        if query:
            return EuropeCard.objects.annotate(
                search=SearchVector(
                    "vin_number",
                    "model",
                )
            ).filter(
                search=query
            ).filter(
                user=user.id
            ).order_by("-date_created")
        else:
            return EuropeCard.objects.filter(user=user.id).order_by("-date_created")


class UsaCardDetailView(FormView, DetailView):
    DetailView.model = UsaCard
    form_class = UsaPaymentForm
    template_name = 'car_site/usa/card_detail.html'
    context_object_name = 'card'

    def get_context_data(self, **kwargs):
        context = super(UsaCardDetailView, self).get_context_data(**kwargs)
        context['form'] = self.get_form()
        return context

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        files = self.request.FILES.getlist('file')
        if form.is_valid() and len(files) <= 8:
            self.form_valid(form)
            return redirect('usa_card', pk=self.kwargs.get('pk'))
        else:
            return self.form_invalid(form)

    def form_valid(self, form):
        files = self.request.FILES.getlist('file')
        pk = self.kwargs.get('pk')
        card = get_object_or_404(UsaCard, pk=pk)
        for f in files:
            UsaPaymentFile(card=card, file=f).save()
        return super().form_valid(form)


class KoreaCardDetailView(FormView, DetailView):
    DetailView.model = KoreaCard
    form_class = KoreaPaymentForm
    template_name = 'car_site/korea/card_detail.html'
    context_object_name = 'card'

    def get_context_data(self, **kwargs):
        context = super(KoreaCardDetailView, self).get_context_data(**kwargs)
        context['photo'] = KoreaPhoto.objects.filter(card_id=self.object.id)
        context['files'] = KoreaPaymentFile.objects.filter(card_id=self.object.id)
        context['form'] = self.get_form()
        return context

    def post(self, request, *args, **kwargs):
        card = get_object_or_404(KoreaCard, pk=kwargs.get('pk'))
        form = KoreaPaymentForm(request.POST, request.FILES)
        if form.is_valid():
            KoreaPaymentFile(card=card, file=request.FILES['file']).save()
            return redirect('korea_card', pk=card.pk)
        else:
            return self.form_invalid(form)


class EuropeCardDetailView(FormView, DetailView):
    DetailView.model = EuropeCard
    form_class = EuropePaymentForm
    template_name = 'car_site/europe/card_detail.html'
    context_object_name = 'card'

    def get_context_data(self, **kwargs):
        context = super(EuropeCardDetailView, self).get_context_data(**kwargs)
        context['photo'] = EuropePhoto.objects.filter(card_id=self.object.id)
        context['files'] = EuropePaymentFile.objects.filter(card_id=self.object.id)
        context['form'] = self.get_form()
        return context

    def post(self, request, *args, **kwargs):
        card = get_object_or_404(EuropeCard, pk=kwargs.get('pk'))
        form = EuropePaymentForm(request.POST, request.FILES)
        if form.is_valid():
            EuropePaymentFile(card=card, file=request.FILES['file']).save()
            return redirect('europe_card', pk=card.pk)
        else:
            return self.form_invalid(form)


class BalanceDetailView(ListView):
    model = UserBalance
    template_name = 'car_site/balance.html'
    context_object_name = 'balance'
    paginate_by = 10

    def get_queryset(self):
        user = self.request.user
        return UserBalance.objects.filter(user=user.id).order_by("-date_created")


def calculator(request):
    return render(request, 'car_site/calculator.html')