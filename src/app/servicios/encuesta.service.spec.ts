import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EncuestaService } from './encuesta.service';

describe('EncuestaService', () => {
  let service: EncuestaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EncuestaService]
    });
    service = TestBed.inject(EncuestaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register an encuesta', () => {
    const mockResponse = { success: true };
    const email = 'test@test.com';
    const estilo = 'Rock';

    service.registrarEncuesta(email, estilo).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/encuestas/registrar');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, estiloMusical: estilo });

    req.flush(mockResponse); // Envía la respuesta mockeada
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes HTTP pendientes
  });
});
