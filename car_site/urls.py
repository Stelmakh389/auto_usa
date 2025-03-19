from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required
from django.urls import path

from . import views
from .models import UsaCard, KoreaCard, EuropeCard, UserBalance
from .views import LWMLoginView, LWMLogoutView

urlpatterns = [
    path(
        "",
        login_required(views.UsaCardListView.as_view(model=UsaCard)),
        name="index"
    ),
    path(
        "card/usa",
        login_required(views.UsaCardListView.as_view(model=UsaCard)),
        name="usa_list"
    ),
    path(
        "card/usa/<int:pk>",
        login_required(
            views.UsaCardDetailView.as_view(
                model=UsaCard,
                success_url='/card/usa/<int:pk>'
            )
        ),
        name="usa_card"
    ),
    path(
        "payment/usa/",
        login_required(views.UsaPaymentListView.as_view(model=UsaCard)),
        name="usa_payment_list"
    ),
    path(
        "card/korea",
        login_required(views.KoreaCardListView.as_view(model=KoreaCard)),
        name="korea_list"
    ),
    path(
        "card/korea/<int:pk>",
        login_required(views.KoreaCardDetailView.as_view(model=KoreaCard)),
        name="korea_card"
    ),
    path(
        "payment/korea/",
        login_required(views.KoreaPaymentListView.as_view(model=KoreaCard)),
        name="korea_payment_list"
    ),
    path(
        "card/europe",
        login_required(views.EuropeCardListView.as_view(model=EuropeCard)),
        name="europe_list"
    ),
    path(
        "card/europe/<int:pk>",
        login_required(views.EuropeCardDetailView.as_view(model=EuropeCard)),
        name="europe_card"
    ),
    path(
        "payment/europe/",
        login_required(views.EuropePaymentListView.as_view(model=EuropeCard)),
        name="europe_payment_list"
    ),
    path(
        'accounts/login/',
        LWMLoginView.as_view(),
        name='login'
    ),
    path(
        'accounts/logout/',
        login_required(LWMLogoutView.as_view()),
        name='logout'
    ),
    path(
        'balance/',
        login_required(views.BalanceDetailView.as_view(model=UserBalance)),
        name='balance'
    ),
    path(
        'calculator/', views.calculator, name='calculator'
    )
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
