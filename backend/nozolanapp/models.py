from __future__ import unicode_literals

import datetime

from django.db import models
from django.utils import timezone

# Create your models here.

class Provider(models.Model):
    name = models.CharField(max_length=200, blank=False)
    description = models.TextField(blank=True, null=False)
    address = models.CharField(max_length=500, blank=False)
    city = models.CharField(max_length=200, blank=False)
    state = models.CharField(max_length=200, blank=False)
    zip = models.IntegerField(default=0)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=200, blank=False)
    website = models.CharField(max_length=200, blank=False)
    facebook = models.CharField(max_length=200, blank=False)
    instagram = models.CharField(max_length=200, blank=False)
    twitter = models.CharField(max_length=200, blank=False)

    def __str__(self):
         return '%s %s' % (self.name, self.description)

    class Meta:
        db_table = '"nozolan_provider"' # define your custom name
