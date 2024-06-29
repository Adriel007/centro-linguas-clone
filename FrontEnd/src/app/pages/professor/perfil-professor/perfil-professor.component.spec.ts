import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfessorComponent } from './perfil-professor.component';

describe('PerfilProfessorComponent', () => {
  let component: PerfilProfessorComponent;
  let fixture: ComponentFixture<PerfilProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilProfessorComponent]
    });
    fixture = TestBed.createComponent(PerfilProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
