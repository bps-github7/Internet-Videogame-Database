import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDropdownComponent } from './crud-dropdown.component';

describe('CrudDropdownComponent', () => {
  let component: CrudDropdownComponent;
  let fixture: ComponentFixture<CrudDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});