from .models import Employees
import django_filters

class UserFilter(django_filters.FilterSet):
    class Meta:
        model = Employees
        fields = ['employee_key', 'name', 'lastname', ]
