import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCursoComponentComponent } from './pesquisa-curso-component.component';

describe('PesquisaCursoComponentComponent', () => {
  let component: PesquisaCursoComponentComponent;
  let fixture: ComponentFixture<PesquisaCursoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaCursoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaCursoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
