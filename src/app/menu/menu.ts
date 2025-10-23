import { Component, input,signal } from '@angular/core';
import { Sidemenu } from "../../Shared/sidemenu/sidemenu";


@Component({
  selector: 'app-menu',
  imports: [Sidemenu],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
tittle:string="Dashboard"
}
