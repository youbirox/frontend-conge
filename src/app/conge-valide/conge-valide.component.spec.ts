import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeValideComponent } from './conge-valide.component';

describe('CongeValideComponent', () => {
  let component: CongeValideComponent;
  let fixture: ComponentFixture<CongeValideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeValideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
