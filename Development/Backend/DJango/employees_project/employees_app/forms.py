from django import forms
from employees_app.models import Employees

class EmployeesForm(forms.ModelForm):
    class Meta:
        model = Employees
        fields = ("employee_key","name","lastname","level","gender","salary","email","password")
