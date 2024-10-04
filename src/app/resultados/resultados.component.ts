import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EncuestaService } from '../servicios/encuesta.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements AfterViewInit {

  constructor(private router: Router, private encuestaService: EncuestaService) {}

  ngAfterViewInit() {
    this.encuestaService.getResultados().subscribe(
      (data) => {
        this.createChart(data['resultados']);
      },
      (error) => {
        console.error('Error fetching results', error);
      }
    );
  }

  goToInicio() {
    this.router.navigate(['/']);
  }

  createChart(data: any) {

    const allCategories = ['Pop', 'Rock', 'Clásica', 'Salsa'];
    const chartData = allCategories.map(category => data[category] || 0);

    Chart.register(...registerables);

    const ctx = document.getElementById('resultadosChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: allCategories,
        datasets: [
          {
            label: 'Votos',
            data: chartData,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
