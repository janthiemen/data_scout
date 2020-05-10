# Generated by Django 3.0.4 on 2020-04-14 14:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scout', '0002_datasource_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='transformation',
            name='previous',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='next', to='scout.Transformation'),
        ),
    ]
