import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadosComponent } from './resultados/resultados.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },  
  { path: 'encuesta', component: EncuestaComponent },  
  { path: 'resultados', component: ResultadosComponent },
  { path: '**', redirectTo: '' },
];
