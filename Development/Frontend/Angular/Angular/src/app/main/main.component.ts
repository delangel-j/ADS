import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	routes: Object[] = [
		{
			title: 'Buscar',
			route: '/main/buscar',
			icon: 'search',
		},
	{
		title: 'Consultar',
		route: '/main/consultar',
		icon: 'contacts',
	},
	{
		title: 'Registrar',
		route: '/main/registros',
		icon: 'add_circle',
	},
  {
		title: 'Cerrar Sesion',
		route: '/',
		icon: 'exit_to_app',
	},
	]

  constructor() { }

  ngOnInit() {
		
  }

}

