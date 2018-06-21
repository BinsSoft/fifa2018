import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointtablesComponent } from './pointtables.component';

describe('PointtablesComponent', () => {
  let component: PointtablesComponent;
  let fixture: ComponentFixture<PointtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
