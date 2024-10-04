import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa este módulo
import Swal from 'sweetalert2';
import { EncuestaComponent } from './encuesta.component';
import { EncuestaService } from '../servicios/encuesta.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { SweetAlertResult } from 'sweetalert2';

describe('EncuestaComponent', () => {
  let component: EncuestaComponent;
  let fixture: ComponentFixture<EncuestaComponent>;
  let encuestaService: EncuestaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule, // Asegúrate de importar este módulo aquí
        EncuestaComponent,
        RouterTestingModule
      ],
      providers: [EncuestaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaComponent);
    component = fixture.componentInstance;
    encuestaService = TestBed.inject(EncuestaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show warning if fields are empty', () => {
    component.email = '';
    component.estiloSeleccionado = '';

    spyOn(Swal, 'fire');

    component.guardarEncuesta();

    expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
      icon: 'warning',
      title: 'Faltan datos',
      text: 'Por favor, complete todos los campos.',
      confirmButtonText: 'Aceptar'
    }));
  });

  it('should show error if email is invalid', () => {
    component.email = 'invalidEmail';
    component.estiloSeleccionado = 'Rock';

    spyOn(Swal, 'fire');

    component.guardarEncuesta();

    expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
      icon: 'error',
      title: 'Correo inválido',
      text: 'Por favor, ingrese un correo electrónico válido.',
      confirmButtonText: 'Aceptar'
    }));
  });

  it('should submit the form if fields are valid', async () => {
    component.email = 'usuario@ejemplo.com';
    component.estiloSeleccionado = 'Rock';
  
    spyOn(encuestaService, 'registrarEncuesta').and.returnValue(of({}));
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({
      isConfirmed: true,
      isDenied: false,
      isDismissed: false,
      value: null
    } as SweetAlertResult<any>));
  
    await component.guardarEncuesta();  // Espera la finalización de la llamada async
  
    expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
      icon: 'success',
      title: '¡Encuesta registrada!',
      text: 'Gracias por participar.',
      confirmButtonText: 'Aceptar'
    }));
  
    // Verifica que los campos estén vacíos
    expect(component.email).toBe('');
    expect(component.estiloSeleccionado).toBe('');
  });
  

  it('should show error if registration fails', () => {
    component.email = 'usuario@ejemplo.com';
    component.estiloSeleccionado = 'Rock';

    spyOn(encuestaService, 'registrarEncuesta').and.returnValue(throwError('Error'));
    spyOn(Swal, 'fire');

    component.guardarEncuesta();

    expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema al registrar la encuesta. Inténtelo nuevamente.',
      confirmButtonText: 'Aceptar'
    }));
  });
});
