import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCursoComponentComponent } from './incluir-curso-component.component';

describe('IncluirCursoComponentComponent', () => {
  let component: IncluirCursoComponentComponent;
  let fixture: ComponentFixture<IncluirCursoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirCursoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirCursoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
