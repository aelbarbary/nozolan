from django.conf.urls import include, url
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth.decorators import login_required
from .  import views
from django.views.generic.base import TemplateView

app_name = 'home'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'blog', TemplateView.as_view(template_name='blog.html'), name="blog"),
]