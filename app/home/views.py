from django.shortcuts import render
from home.models import Offer

def index(request):
    offers =   Offer.objects.all()
    context = { 'offers': offers}
    return render(request, 'index.html', context)