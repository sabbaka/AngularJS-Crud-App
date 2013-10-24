from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

from rest_framework import routers

from .views import Index, ClientViewSet
router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)

urlpatterns = patterns('',
    url('^$', Index.as_view(), name='index'),

    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Examples:
    # url(r'^$', 'crudapp.views.home', name='home'),
    # url(r'^crudapp/', include('crudapp.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
