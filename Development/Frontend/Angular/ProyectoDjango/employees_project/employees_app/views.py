from django.shortcuts import render
from rest_framework import generics
from employees_app.models import Employees
from employees_app.serializers import EmployeesSerializer

class EmployeesList(generics.ListCreateAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer

class EmployeesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer