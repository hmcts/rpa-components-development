import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpaFrameworkComponent } from './rpa-framework.component';

describe('RpaFrameworkComponent', () => {
  let component: RpaFrameworkComponent;
  let fixture: ComponentFixture<RpaFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpaFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpaFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
