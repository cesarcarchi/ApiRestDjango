from django.db import models

# Create your models here.
class Elevacion(models.Model):
    idelevacion = models.IntegerField(primary_key=True)
    desde = models.IntegerField(blank=True, null=True)
    hasta = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'elevacion'

    def __str__(self):
    	return "%s" % (self.hasta)

class ParteUsada(models.Model):
    idparte_usada = models.IntegerField(primary_key=True)
    nombre_parte_usada = models.CharField(max_length=30, blank=True)

    class Meta:
        managed = False
        db_table = 'parte_usada'

    def __str__(self):
    	return "%s" % (self.nombre_parte_usada)

class Plantas(models.Model):
    idplantas = models.IntegerField(primary_key=True)
    idparte_usada = models.ForeignKey(ParteUsada, db_column='idparte_usada')
    idproductos = models.ForeignKey('Productos', db_column='idproductos')
    nombre_cientifico = models.CharField(max_length=30, blank=True)
    nombre_vernaculo = models.CharField(max_length=100, blank=True)
    descripcion = models.CharField(max_length=100, blank=True)
    origen = models.CharField(max_length=45, blank=True)
    comercializacion = models.CharField(max_length=45, blank=True)

    class Meta:
        managed = False
        db_table = 'plantas'

    def __str__(self):
    	return "%s" % (self.nombre_vernaculo)

class PlantasElevacion(models.Model):
    idplantas_elevacion = models.IntegerField(primary_key=True)
    idplantas = models.ForeignKey(Plantas, db_column='idplantas')
    idelevacion = models.ForeignKey(Elevacion, db_column='idelevacion')

    class Meta:
        managed = False
        db_table = 'plantas_elevacion'

    def __str__(self):
    	return "%s" % (self.idplantas_elevacion)

class Productos(models.Model):
    idproductos = models.IntegerField(primary_key=True)
    nombre_productos = models.CharField(max_length=30, blank=True)

    class Meta:
        managed = False
        db_table = 'productos'

    def __str__(self):
    	return "%s" % (self.nombre_productos)