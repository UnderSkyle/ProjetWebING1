from django.urls import path
from . import views

urlpatterns = [
    path('send_mail/',views.send_mail_contact),
    path('signup/',views.create_account),
    path('login/',views.connexion),
    path('getProducts/', views.get_products, name="test"),
    path('addToCart/', views.add_to_cart),
    path('completeCart/', views.complete_cart),
    path('createAddress/',views.create_address),
    path('updateAddress/',views.update_address),
    path('deleteAddress/',views.delete_address),
    path('getAddresses/',views.get_addresses),
    path('getAddress/',views.get_address),
    path('getCart/', views.get_cart),
    path('getProducts/', views.get_products),
    path('getUser/', views.get_user),
    path('updateUser/', views.update_user),
    path('createOrder/', views.create_order),
    path('getOrders/', views.get_orders),
    path('deleteItem/', views.remove_item)
]