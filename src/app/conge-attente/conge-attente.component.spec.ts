import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeAttenteComponent } from './conge-attente.component';

describe('CongeAttenteComponent', () => {
  let component: CongeAttenteComponent;
  let fixture: ComponentFixture<CongeAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
