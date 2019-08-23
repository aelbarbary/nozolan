from django.contrib import admin
from .models import  *

# Register your models here.
class ProviderAdmin(admin.ModelAdmin):
    model = Provider

class OfferAdmin(admin.ModelAdmin):
    model = Offer

admin.site.register(Provider, ProviderAdmin)
admin.site.register(Offer, OfferAdmin)