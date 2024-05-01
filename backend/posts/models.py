from django.db import models
from django.contrib.auth.models import User

class Address(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    first_name = models.CharField(max_length=200, default="")
    last_name = models.CharField(max_length=200,default="")
    street = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=10)
    city = models.CharField(max_length=200)
    complementary_info = models.CharField(max_length=200)

    def __str__(self):
        return f"Address :{self.street}, {self.postal_code}, {self.city}"

class ProductCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return f"ProductCategory :{self.name}"
    
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    stock = models.IntegerField()
    image = models.CharField(max_length=200)
    ref = models.CharField(max_length=10)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"Product :{self.name}"
    
class Cart(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
        
    def __str__(self):
        return f"Cart :Created by {self.created_by}"

class CartItem(models.Model):
    quantity = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)

    def __str__(self):
        return f"CardItem :{self.quantity} times {self.product} in {self.cart}"

class Order(models.Model):
    placed_at = models.DateTimeField()
    placed_by = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)
        
    def __str__(self):
        return f"Order : Placed by {self.placed_by} at {self.placed_at}"

class OrderItem(models.Model):
    quantity = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
        
    def __str__(self):
        return f"OrderITem :{self.quantity} times {self.product} in {self.order}"