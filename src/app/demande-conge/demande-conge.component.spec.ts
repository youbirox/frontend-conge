import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemandeCongeComponent } from './demande-conge.component';

describe('DemandeCongeComponent', () => {
  let component: DemandeCongeComponent;
  let fixture: ComponentFixture<DemandeCongeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
