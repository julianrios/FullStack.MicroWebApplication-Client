import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDeleteComponent } from './safe-delete.component';

describe('SafeDeleteComponent', () => {
  let component: SafeDeleteComponent;
  let fixture: ComponentFixture<SafeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
