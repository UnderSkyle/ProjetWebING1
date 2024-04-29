from django.urls import path
from . import views

urlpatterns = [
    path('hello/',views.say_hello),
    path('send_mail/',views.send_mail_contact),
    path('signup/',views.create_account),
    path('login/',views.connexion),
    path('getData/', views.get_data, name="test")
]