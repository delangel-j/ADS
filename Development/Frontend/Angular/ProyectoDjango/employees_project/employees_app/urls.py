from django.urls import path
from django.conf.urls import url
from .views import EmployeesDetail
from .views import EmployeesList 

urlpatterns = [
    url(r'employees$', EmployeesList.as_view()),
    url(r'employees/(?P<pk>[emp0-9]+)$', EmployeesDetail.as_view()),
]
