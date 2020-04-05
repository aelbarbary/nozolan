from .local_base import *  # noqa

DATABASES = {
     'default': {
         'ENGINE': 'django.db.backends.postgresql',
         'NAME': 'nozolan',
         'HOST': 'localhost',
         'USER': "postgres",
         'PASSWORD': "P@ssw0rd"
     }
 }

