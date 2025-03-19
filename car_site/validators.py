from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _


@deconstructible
class UploadFileValidator:
    """
    Validator for uploaded files
    """

    # Size limit in MB
    MAX_SIZE = 50

    # Allowed extensions
    ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'csv']

    def __call__(self, value):
        """
        Validate if the uploaded file meets the criteria.
        The value parameter is a django.core.files.uploadedfile.UploadedFile object.
        """
        if value.size > self.MAX_SIZE * 1024 * 1024:
            raise ValidationError(_("File size must be no more than %(size)s MB."), params={'size': self.MAX_SIZE},
                                  code='invalid_size')

        file_extension = value.name.split('.')[-1].lower()
        if file_extension not in self.ALLOWED_EXTENSIONS:
            raise ValidationError(
                _("File extension '%(ext)s' is not allowed. Please upload a file with one of the following extensions: %(ext_list)s."),
                params={'ext': file_extension, 'ext_list': ', '.join(self.ALLOWED_EXTENSIONS)},
                code='invalid_extension')
