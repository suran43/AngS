import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu/menu";
import { Sidemenu } from '../Shared/sidemenu/sidemenu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Sidemenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
}
