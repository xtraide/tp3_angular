import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsParisComponent } from './etudiants-paris.component';

describe('EtudiantsParisComponent', () => {
  let component: EtudiantsParisComponent;
  let fixture: ComponentFixture<EtudiantsParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantsParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantsParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
