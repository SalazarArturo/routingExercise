import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'app-about-component',
  styleUrl: './about-component.css',
  templateUrl: './about-component.html',
})
export class AboutComponent {}
