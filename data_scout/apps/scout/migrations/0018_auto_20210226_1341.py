# Generated by Django 3.0.4 on 2021-02-26 12:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scout', '0017_userprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='scout.UserProject'),
        ),
    ]
