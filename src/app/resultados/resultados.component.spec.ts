import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResultadosComponent } from './resultados.component';
import { EncuestaService } from '../servicios/encuesta.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultadosComponent', () => {
  let component: ResultadosComponent;
  let fixture: ComponentFixture<ResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ResultadosComponent, RouterTestingModule],
      providers: [EncuestaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
