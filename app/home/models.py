from django.db import models

# Create your models here.

class Provider(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=8000)
    logo = models.ImageField(upload_to = "providers", default = 'no-img.jpg')
    date_created = models.DateField(max_length=8, null=True)
    active = models.BooleanField(default=False)
    def __str__(self):
        return 'Name: ' + self.name
    
    class Meta:
        db_table = "provider"