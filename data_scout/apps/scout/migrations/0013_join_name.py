# Generated by Django 3.0.4 on 2021-02-05 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scout', '0012_auto_20210204_2025'),
    ]

    operations = [
        migrations.AddField(
            model_name='join',
            name='name',
            field=models.CharField(default='test join', max_length=512),
            preserve_default=False,
        ),
    ]
