from django.urls import path
from . import views

urlpatterns = [
    path('send_mail/',views.send_mail_contact),
    path('signup/',views.create_account),
    path('login/',views.connexion),
    path('getProducts/', views.get_products, name="test"),
    path('addToCart/', views.add_to_cart),
    path('createAddress/',views.create_address),
    path('updateAddress/',views.update_address),
    path('getAdresses/',views.get_addresses),
    path('getProducts/', views.get_products),
    path('getUser/', views.get_user)