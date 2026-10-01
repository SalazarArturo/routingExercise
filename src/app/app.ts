import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink], //este es el encargado de hacer la navegacion dinamica en los templates
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('routing');
}
