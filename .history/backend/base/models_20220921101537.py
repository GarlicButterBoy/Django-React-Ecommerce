from unicodedata import name
from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=False)
    name = models.CharField
    #image = 
    brand = 
    category = 
    description = 
    rating = 
    numReviews = 
    price = 
    countInStock = 
    createdAt = 
    _id = 