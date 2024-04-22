from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password,check_password
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from models import Product

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

@csrf_exempt
@api_view(['POST'])
def connexion(request):
    """request={
        email:
        password:
    }"""
    print("here")
    if (request.method == "POST"):
        data = request.data
        print(data)
        email = data.get("email")
        pwd = data.get("password")
        user = authenticate(username=email, password=pwd)
        if user is not None:
            print("success")
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=400)

@csrf_exempt
@api_view(['POST'])
def create_account(request):
    if (request.method == "POST"):
        data = request.data
        print(data.get("email"))
        email = data.get("email")
        pwd = data.get("password")
        name = data.get("name")
        surname = data.get("surname")
        if (request is None or email is None or pwd is None or name is None or surname is None):
            return HttpResponse(status=400)
        """request={
            email:
            password:
            name:
            surname:
        }"""
        try:
            users = User.objects.get(email=email)
            return HttpResponse(status=400)
        except User.DoesNotExist: 
            user = User.objects.create_user(username=email,email=email,password=pwd,first_name=name,last_name=surname)
            return HttpResponse(status=200)