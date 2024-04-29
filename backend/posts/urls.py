from django.urls import path
from . import views

urlpatterns = [
    path('send_mail/',views.send_mail_contact),
    path('signup/',views.create_account),
    path('login/',views.connexion),
    path('getProducts/', views.get_products, name="test")
]