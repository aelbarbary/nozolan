from django.shortcuts import render
from home.models import Offer

def index(request):
    offers =   Offer.objects.all()
    context = { 'offers': offers}
    return render(request, 'index.html', context)

def category(request, category):
    print(category)
    context = { 'category': category}
    return render(request, 'category.html', context)