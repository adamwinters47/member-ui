import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSlipComponent } from './assign-slip.component';

describe('AssignSlipComponent', () => {
  let component: AssignSlipComponent;
  let fixture: ComponentFixture<AssignSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
