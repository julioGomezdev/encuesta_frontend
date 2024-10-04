import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EncuestaService } from '../servicios/encuesta.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-encuesta',
    standalone: true,
    imports: [
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        FormsModule,
    ],
    templateUrl: './encuesta.component.html',
    styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent {
    estilosMusicales = ['Rock', 'Pop', 'Clásica', 'Salsa'];
    email: string = '';
    estiloSeleccionado: string = '';
    mensaje: string = ''; // Para fines de prueba


    constructor(private router: Router, private encuestaService: EncuestaService) { }

    goToInicio() {
        this.router.navigate(['/']);
    }

    guardarEncuesta() {
        // Expresión regular para validar el formato de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        // Verifica si los campos están vacíos
        if (!this.email || !this.estiloSeleccionado) {
            Swal.fire({
                icon: 'warning',
                title: 'Faltan datos',
                text: 'Por favor, complete todos los campos.',
                confirmButtonText: 'Aceptar'
            });
        } 
        // Verifica si el formato del correo es inválido
        else if (!emailPattern.test(this.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Correo inválido',
                text: 'Por favor, ingrese un correo electrónico válido.',
                confirmButtonText: 'Aceptar'
            });
        } 
        // Si todo está correcto, envía la encuesta
        else {
            this.encuestaService.registrarEncuesta(this.email, this.estiloSeleccionado).subscribe(
                response => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Encuesta registrada!',
                        text: 'Gracias por participar.',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        // Limpia los campos del formulario después del registro
                        this.email = '';
                        this.estiloSeleccionado = '';
                    });
    
                    console.log('Encuesta registrada', response);
                },
                error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema al registrar la encuesta. Inténtelo nuevamente.',
                        confirmButtonText: 'Aceptar'
                    });
                    console.error('Error registrando encuesta', error);
                }
            );
        }
    }
    
  
  
}
