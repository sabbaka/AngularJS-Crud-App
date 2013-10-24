from django.views.generic import TemplateView
from .models import Client
from .serializer import ClientSerializer
from rest_framework import viewsets


class Index(TemplateView):
    template_name = 'index.html'


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer