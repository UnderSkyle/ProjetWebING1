from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password,check_password
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from posts.models import Product
from posts.models import ProductCategory
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

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
    return Response(status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['POST'])
def connexion(request):
    """request={
        email:
        password:
    }"""
    if (request.method == "POST"):
        data = request.data
        email = data.get("email")
        pwd = data.get("password")
        user = authenticate(username=email, password=pwd)
        if user is not None:
            return Response(user.id,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

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
            return Response(status=status.HTTP_400_BAD_REQUEST)
        """request={
            email:
            password:
            name:
            surname:
        }"""
        try:
            users = User.objects.get(email=email)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist: 
            user = User.objects.create_user(username=email,email=email,password=pwd,first_name=name,last_name=surname)

            return Response(user.id,status=status.HTTP_200_OK)
          
@csrf_exempt
@api_view(['GET'])
def get_products(request):
     try:
         category_id = request.GET.get('category_id')
         if category_id is None:
             return Response(status=400)
         category = ProductCategory.objects.get(pk=category_id)
         products = Product.objects.filter(category=category)
         product_data = [
              {'name': product.name, 'price': product.price, 'stock': product.stock, 'image': product.image, 'ref': product.ref}
               for product in products
         ]
         print(product_data)
         return Response(product_data)
     except ProductCategory.DoesNotExist:
         return Response(status=404)

