import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RefusComponent } from './refus.component';

describe('RefusComponent', () => {
  let component: RefusComponent;
  let fixture: ComponentFixture<RefusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RefusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
