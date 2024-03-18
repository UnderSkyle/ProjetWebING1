from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from .models import User
from django.contrib.auth.hashers import make_password,check_password

# Create your views here.

def say_hello(request):
    return HttpResponse('Hello World')

def send_mail_contact(request:dict):
    """request={
        surname:
        name:
        email:
        gender:
        job:
        birthdate:
        subject:
        message:
    }"""
    message = f"Mail de %s, %s %s (%s), %s, né(e) le %s :\n %s" % (request["email"], request["surname"],request["name"], request["gender"], request["job"], request["birthdate"], request["message"])
    send_mail(
        subject=request["subject"],
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=["abaivel@outlook.fr"],
        fail_silently=False,
    )
    return HttpResponse('email envoyé')

def connexion(request):
    """request={
        email:
        password:
    }"""
    users = User.objects.get(email=request["email"])
    right_password=check_password(request["password"],users.password)
    if (right_password):
        return HttpResponse.status_code(200)
    else:
        return HttpResponse.status_code(400)

def create_account(request):
    """request={
        email:
        password:
        name:
        surname:
        birth_date:
    }"""
    users = User.objects.get(email=request["email"])
    if (len(users)==0):
        user = User(email=request["mail"],password=make_password(request["password"]),name=request["name"],surname=request["surname"],birth_date=request["birth_date"])
        user.save()
        return HttpResponse.status_code(200)
    else:
        return HttpResponse.status_code(400)