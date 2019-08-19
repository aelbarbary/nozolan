from django.contrib import admin
from .models import  *

# Register your models here.
class ProviderAdmin(admin.ModelAdmin):
    model = Provider



admin.site.register(Provider, ProviderAdmin)