import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   public title: string;
  items: MenuItem[];

  ngOnInit() {
    this.title = 'projetoIbge';
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        routerLink: 'usuario'
      },
      {
        label: 'States',
        icon: 'pi pi-fw pi-globe',
        routerLink: 'estados'
      },
      /* {
        label: 'Edit', icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }]
      } */
    ];
  }

  button() {
    this.title = 'Estados do Ibge';
  }

  /*  button() {
     this.title = 'Mudou o titulo';
   }  items: [{
                   label: 'New',
                   icon: 'pi pi-fw pi-home',
                   routerLink: 'home'
                   /* items: [
                       {label: 'Project'},
                       {label: 'Other'},
                   ]
                 },
                 {label: 'Open'},
                 {label: 'Quit'}*/
}
