import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpFormBuilderComponent } from './edit-emp-form-builder.component';

describe('EditEmpFormBuilderComponent', () => {
  let component: EditEmpFormBuilderComponent;
  let fixture: ComponentFixture<EditEmpFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
