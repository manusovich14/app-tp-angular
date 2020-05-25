import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newpunto1Component } from './newpunto1.component';

describe('Newpunto1Component', () => {
  let component: Newpunto1Component;
  let fixture: ComponentFixture<Newpunto1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpunto1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newpunto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
