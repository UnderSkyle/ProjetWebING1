from smtplib import SMTPException
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from posts.models import Product, Cart, CartItem, Address, Order, OrderItem
from posts.models import ProductCategory
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone

# Create your views here.

@csrf_exempt
@api_view(['POST'])
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
    if (request.method == "POST"):
        data = request.data
        message = f"Mail de %s, %s %s (%s), %s, né(e) le %s :\n %s" % (data.get("email"), data.get("surname"),data.get("name"), data.get("gender"), data.get("job"), data.get("birthdate"), data.get("message"))
        print("ici")
        try:
            print("ici2")
            send_mail(
                subject="test",
                message="bla bla",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=["abaivel@outlook.fr"],
                fail_silently=False,
            )
            print("here")
            return Response(status=status.HTTP_200_OK)
        except SMTPException:
            return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

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
@api_view(['POST'])
def add_to_cart(request):
    """request={
            id_user
            quantity
            ref_product
        }"""
    if (request.method == "POST"):
        data = request.data
        id_user = data.get("id_user")
        quantity = data.get("quantity")
        ref_product = data.get("ref_product")
        try:
            user = User.objects.get(id=id_user)
        except User.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        try:
            product = Product.objects.get(ref=ref_product)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        try:
            user_cart = Cart.objects.get(created_by=user)
        except Cart.DoesNotExist:
            user_cart = Cart(created_by=user)
        user_cart.save()
        try:
            cartitem=user_cart.cartitem_set.get(product=product)
            cartitem.quantity+=quantity
            cartitem.save()
        except CartItem.DoesNotExist:
            user_cart.cartitem_set.create(quantity=quantity, product=product)
        user_cart.save()
        return Response(user.id,status=status.HTTP_200_OK)
    
@csrf_exempt
@api_view(['POST'])
def complete_cart(request):
    """request={
            id_user
            items
        }"""
    if (request.method == "POST"):
        data = request.data
        id_user = data.get("id_user")
        items = data.get("items")
        try:
            user = User.objects.get(id=id_user)
        except User.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        try:
            user_cart = Cart.objects.get(created_by=user)
        except Cart.DoesNotExist:
            user_cart = Cart(created_by=user)
        user_cart.save()
        for item in items:
            try:
                product = Product.objects.get(ref=item['ref'])
            except Product.DoesNotExist:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            try:
                cartitem=user_cart.cartitem_set.get(product=product)
                cartitem.quantity+=quantity
                cartitem.save()
            except CartItem.DoesNotExist:
                user_cart.cartitem_set.create(quantity=item["quantity"], product=product)
        user_cart.save()
        return Response(user.id,status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['DELETE'])
def delete_address(request):
    """request={
            id_user
            id_address
        }"""
    if (request.method=="DELETE"):
        data=request.data
        user = User.objects.get(id=data.get("id_user"))
        address = Address.objects.get(id=data.get("id_address"))
        if (address.user!=user):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        address.delete()
        return Response(status=status.HTTP_200_OK)



@csrf_exempt
@api_view(['POST'])
def create_address(request):
    """request={
            id_user
            first_name
            last_name
            street
            postal_code
            city
            complementary_info
        }"""
    if (request.method=="POST"):
        data=request.data
        user=User.objects.get(id=data.get("id_user"))
        user.address_set.create(first_name=data.get("first_name"),last_name=data.get("last_name"),street=data.get("street"), postal_code=data.get("postal_code"), city=data.get("city"), complementary_info=data.get("complementary_info"))
        user.save()
        return Response(status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['PUT'])
def update_address(request):
    """request={
            id_user
            id_address
            first_name
            last_name
            street
            postal_code
            city
            complementary_info
        }"""
    if (request.method=="PUT"):
        data=request.data
        address = Address.objects.get(id=data.get("id_address"))
        address.first_name = data.get("first_name")
        address.last_name = data.get("last_name")
        address.street = data.get("street")
        address.postal_code = data.get("postal_code")
        address.city = data.get("city")
        address.complementary_info = data.get("complementary_info")
        address.save()
        return Response(status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['GET'])
def get_addresses(request):
     """id_user
            first_name
            last_name
            street
            postal_code
            city
            complementary_info"""
     try:
         user_id = request.GET.get('user_id')
         if user_id is None:
             return Response(status=400)
         user = User.objects.get(id=user_id)
         addresses = Address.objects.filter(user=user)
         addresses_data = [
              {'id':address.id,'first_name': address.first_name, 'last_name': address.last_name, 'street': address.street, 'postal_code': address.postal_code, 'city': address.city, "complementary_info": address.complementary_info}
               for address in addresses
         ]
         return Response(addresses_data, status=status.HTTP_200_OK)
     except Address.DoesNotExist:
         return Response(status=404)

@csrf_exempt
@api_view(['GET'])
def get_address(request):
     try:
         id_address = request.GET.get('idAddress')
         if  id_address is None:
             return Response(status=400)
         address = Address.objects.get(id=id_address)
         address_data = {'id':address.id,'prenom': address.first_name, 'nom': address.last_name, 'adresse': address.street, 'codePostal': address.postal_code, 'ville': address.city, "complement": address.complementary_info}
         print(address_data)
         return Response(address_data, status=status.HTTP_200_OK)
     except Address.DoesNotExist:
         return Response(status=status.HTTP_200_OK)



@csrf_exempt
@api_view(['POST'])
def remove_item(request):
    print(request.data)
    if request.method == 'POST':
        try:
            user_id = request.data.get('user_id')
            product_ref = request.data.get('product_ref')
                # Retrieve the user's cart
            cart = Cart.objects.get(created_by_id=user_id)
                # Retrieve the product to remove
            product = Product.objects.get(ref=product_ref)

                # Remove the product from the cart
            cart_item = CartItem.objects.get(cart=cart, product=product)
            cart_item.delete()

            return Response(status=200)

        except Cart.DoesNotExist:
            print('noCart')
            return Response(status=404)

        except Product.DoesNotExist:
            print('noproduct')
            return Response(status=404)

        except CartItem.DoesNotExist:
            print('nocartItem')
            return Response(status=404)
    return Response(status=405)


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
         return Response(product_data)
     except ProductCategory.DoesNotExist:
         return Response(status=404)

@csrf_exempt
@api_view(['GET'])
def get_user(request):
     try:
         user_id = request.GET.get('userID')
         if user_id is None:
             return Response(status=400)
         user = User.objects.get(pk=user_id)
         user_data ={'first_name': user.first_name, 'last_name': user.last_name, 'email': user.email}
         return Response(user_data)
     except ProductCategory.DoesNotExist:
         return Response(status=404)

@csrf_exempt
@api_view(['GET'])
def get_cart(request):
     try:
          user_id = request.GET.get('userID')
          if user_id is None or user_id == "null":
             return Response({'name': 'test', 'quantity':'5', 'price': '10', 'image': 'c01.png', 'ref': "test"})
          cart = Cart.objects.get(created_by_id=user_id)
          cart_items = CartItem.objects.filter(cart=cart)
          product_data = [
                       {'name': cart_item.product.name, 'quantity':cart_item.quantity, 'price': cart_item.product.price * cart_item.quantity, 'image': cart_item.product.image, 'ref': cart_item.product.ref}
                        for cart_item in cart_items
                  ]
          return Response(product_data)
     except Cart.DoesNotExist:
          return Response(status=404)

@csrf_exempt
@api_view(['GET'])
def get_orders(request):
     try:
          user_id = request.GET.get('userID')
          orders = orders = Order.objects.filter(placed_by_id=user_id)

          orders_data = []
          for order in orders:
              order_data = {
                'id': order.id,
                'placed_at': order.placed_at.strftime('%Y-%m-%d %H:%M:%S'),  # Format the datetime as string
                'address': order.address.__str__() if order.address else None,  # Address as string or None if not provided
                'order_items': [{
                    'quantity': order_item.quantity,
                    'product_name': order_item.product.name,
                    'product_price': order_item.product.price,
                    'product_image': order_item.product.image,
                    'product_ref': order_item.product.ref
                } for order_item in order.orderitem_set.all()]  # Fetch order items for the order
              }
              orders_data.append(order_data)

          return Response(orders_data)
     except Cart.DoesNotExist:
          return Response(status=404)

@csrf_exempt
@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        try:
            user_id = request.data.get('user_id')
            address_id = request.data.get('address_id')
            print(user_id)
            # Retrieve the cart and associated cart items
            cart = Cart.objects.get(created_by_id=user_id)
            print(cart)
            cart_items = CartItem.objects.filter(cart=cart)

            # Create the order
            order = Order.objects.create(
                placed_at=timezone.now(),
                placed_by=cart.created_by,
                address=Address.objects.get(id=address_id)
            )

            # Create order items from the cart items and reduce the stock of the products
            for cart_item in cart_items:
                OrderItem.objects.create(
                    quantity=cart_item.quantity,
                    product=cart_item.product,
                    order=order
                )
                cart_item.product.stock-=cart_item.quantity
                cart_item.product.save()

            cart_items.delete()

            return Response(status=200)

        except Cart.DoesNotExist:
            print('noCart')
            return Response(status=404)

        except Address.DoesNotExist:
            return Response(status=404)

        except Exception as e:
            print(e)
            return Response(status=500)
    return Response(status=405)




