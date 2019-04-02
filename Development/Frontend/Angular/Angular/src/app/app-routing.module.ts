import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {RegistroComponent} from './registro/registro.component';
import {ConsultaComponent} from './consulta/consulta.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LoginComponent} from './login/login.component'
const routes: Routes = [
    {
      path: 'main',
      component: MainComponent,
      children: [
        {
          component: RegistroComponent,
          path: 'registros',
        },
        {
          component: ConsultaComponent,
          path: 'consultar',
        },
        {
          component: BuscarComponent,
          path: 'buscar',
        },
      ]
    },
    {
      path: '',
      component: LoginComponent,  
    },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  MainComponent,
];
