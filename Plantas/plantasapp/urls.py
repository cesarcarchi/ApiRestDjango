from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns

from plantasapp import views

urlpatterns = [
    url(r'^Elevacion/$', views.ElevacionList.as_view()),
    url(r'^Elevacion/(?P<pk>[0-9]+)/$', views.ElevacionDetail.as_view()),
    url(r'^ParteUsada/$', views.ParteUsadaList.as_view()),
    url(r'^ParteUsada/(?P<pk>[0-9]+)/$', views.ParteUsadaDetail.as_view()),
    url(r'^Plantas/$', views.PlantasList.as_view()),
    url(r'^Plantas/(?P<pk>[0-9]+)/$', views.PlantasDetail.as_view()),
    url(r'^PlantasElevacion/$', views.PlantasElevacionList.as_view()),
    url(r'^PlantasElevacion/(?P<pk>[0-9]+)/$', views.PlantasElevacionDetail.as_view()),
    url(r'^Productos/$', views.ProductosList.as_view()),
    url(r'^Productos/(?P<pk>[0-9]+)/$', views.ProductosDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)