from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return f"Post :{self.title}"
    
class User(models.Model):
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    birth_date = models.DateField()

    def __str__(self):
        return f"User :{self.email}"

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

class CardItem(models.Model):
    quantity = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
        
    def __str__(self):
        return f"CardItem :{self.quantity} times {self.product} in {self.cart}"

class Order(models.Model):
    placed_at = models.DateTimeField()
    placed_by = models.ForeignKey(User, on_delete=models.CASCADE)
        
    def __str__(self):
        return f"Order : Placed by {self.placed_by} at {self.placed_at}"

class OrderItem(models.Model):
    quantity = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
        
    def __str__(self):
        return f"OrderITem :{self.quantity} times {self.product} in {self.order}"