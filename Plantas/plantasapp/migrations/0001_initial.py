# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Elevacion',
            fields=[
                ('idelevacion', models.IntegerField(serialize=False, primary_key=True)),
                ('desde', models.IntegerField(null=True, blank=True)),
                ('hasta', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'db_table': 'elevacion',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ParteUsada',
            fields=[
                ('idparte_usada', models.IntegerField(serialize=False, primary_key=True)),
                ('nombre_parte_usada', models.CharField(max_length=30, blank=True)),
            ],
            options={
                'db_table': 'parte_usada',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Plantas',
            fields=[
                ('idplantas', models.IntegerField(serialize=False, primary_key=True)),
                ('nombre_cientifico', models.CharField(max_length=30, blank=True)),
                ('nombre_vernaculo', models.CharField(max_length=100, blank=True)),
                ('descripcion', models.CharField(max_length=100, blank=True)),
                ('origen', models.CharField(max_length=45, blank=True)),
                ('comercializacion', models.CharField(max_length=45, blank=True)),
            ],
            options={
                'db_table': 'plantas',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PlantasElevacion',
            fields=[
                ('idplantas_elevacion', models.IntegerField(serialize=False, primary_key=True)),
            ],
            options={
                'db_table': 'plantas_elevacion',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('idproductos', models.IntegerField(serialize=False, primary_key=True)),
                ('nombre_productos', models.CharField(max_length=30, blank=True)),
            ],
            options={
                'db_table': 'productos',
                'managed': False,
            },
        ),
    ]
