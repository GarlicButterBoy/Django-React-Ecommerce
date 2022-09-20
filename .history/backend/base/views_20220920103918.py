from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>'
    ]
    return JsonResponse('Hello', safe=False)

