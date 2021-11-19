import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryEntryComponent } from './directory-entry.component';

describe('DirectoryEntryComponent', () => {
  let component: DirectoryEntryComponent;
  let fixture: ComponentFixture<DirectoryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
