from django.forms import widgets
from rest_framework import serializers
from plantasapp.models import * 
    
class ElevacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elevacion 
        fields = ('idelevacion', 'desde', 'hasta')

class ParteUsadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParteUsada 
        fields = ('idparte_usada', 'nombre_parte_usada')

class PlantasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plantas
        fields = ('idplantas', 'idparte_usada', 'idproductos', 'nombre_cientifico', 'nombre_vernaculo', 'descripcion', 'origen', 'descripcion')

class PlantasElevacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantasElevacion 
        fields = ('idplantas_elevacion', 'idplantas', 'idelevacion')

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos 
        fields = ('idproductos', 'nombre_productos')
