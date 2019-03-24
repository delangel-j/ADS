"""employees_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from employees_app import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('emp', views.emp),
    path('show', views.show),
    path('edit/<str:id>', views.edit),
    path('update/<str:id>', views.update),
    path('delete/<str:id>', views.delete),
    path('', include('employees_app.urls')),
    url(r'^search/$', views.search, name='search'),
]
