# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Employees(models.Model):
    employee_key = models.CharField(primary_key=True, max_length=20)
    name = models.CharField(max_length=45)
    lastname = models.CharField(max_length=45)
    level = models.IntegerField()
    gender = models.CharField(max_length=1)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    hash = models.CharField(max_length=50)
    class Meta:
        db_table = 'employees'
