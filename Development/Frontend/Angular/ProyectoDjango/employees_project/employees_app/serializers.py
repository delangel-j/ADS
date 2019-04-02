from rest_framework import serializers
from employees_app.models import Employees

class EmployeesSerializer(serializers.ModelSerializer):
		class Meta:
			model = Employees
			fields = ('employee_key', 'name', 'lastname', 'level', 'gender', 'salary', 'email','password','hash')  

