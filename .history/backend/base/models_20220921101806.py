from unicodedata import name
from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    #image = 
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = 
    createdAt = 
    _id = 