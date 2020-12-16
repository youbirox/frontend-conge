import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditcongeComponent } from './editconge.component';

describe('EditcongeComponent', () => {
  let component: EditcongeComponent;
  let fixture: ComponentFixture<EditcongeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
