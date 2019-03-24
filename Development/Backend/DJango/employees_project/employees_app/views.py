from django.shortcuts import render, redirect
from employees_app.forms import EmployeesForm
from employees_app.models import Employees
from django.views.generic import TemplateView
from .filters import UserFilter

#Función para registrar a un empleado
def emp(request):
    if request.method == "POST":
        form = EmployeesForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect("/show")
            except:
                pass
    else:
        form = EmployeesForm()
    return render(request, "index.html", {'form':form})

#Función para hacer una consulta de todos los empleados
def show(request):
    employees = Employees.objects.all()
    return render(request,"show.html",{'employees': employees})


def search(request):
    user_list = Employees.objects.all()
    user_filter = UserFilter(request.GET, queryset=user_list)
    return render(request, 'search.html', {'filter': user_filter})




#Función para editar un empleado
def edit(request, id):
    employees = Employees.objects.get(employee_key=id)
    return render(request,"edit.html", {'employees' : employees})

#Función para actualizar un empleado
def update(request, id):
    employee = Employees.objects.get(employee_key=id)
    form = EmployeesForm(request.POST, instance = employee)
    if form.is_valid():
        form.save()
        return redirect('/show')
    return (request,"edit.html", {'employee': employee})

#Función para eliminar un empleado
def delete(request, id):
    employee = Employees.objects.get(employee_key=id)
    employee.delete()
    return redirect("/show")

#Función para mostrar la pagina de login
class HomePageView(TemplateView):
    template_name = 'login.html'
