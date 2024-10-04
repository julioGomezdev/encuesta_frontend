import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [MatButtonModule],
})
export class InicioComponent {
  constructor(private router: Router) {}

  goToEncuesta() {
    this.router.navigate(['/encuesta']);
  }

  goToResultados() {
    this.router.navigate(['/resultados']);
  }
}
