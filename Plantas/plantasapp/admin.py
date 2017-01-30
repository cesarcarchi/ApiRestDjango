from django.contrib import admin

# Register your models here.
from plantasapp.models import *

admin.site.register(Elevacion)
admin.site.register(ParteUsada)
admin.site.register(Plantas)
admin.site.register(PlantasElevacion)
admin.site.register(Productos)
