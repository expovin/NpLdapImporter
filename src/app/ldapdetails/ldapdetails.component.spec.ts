import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LDAPDetailsComponent } from './ldapdetails.component';

describe('LDAPDetailsComponent', () => {
  let component: LDAPDetailsComponent;
  let fixture: ComponentFixture<LDAPDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LDAPDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LDAPDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
