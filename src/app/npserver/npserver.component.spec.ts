import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPServerComponent } from './npserver.component';

describe('NPServerComponent', () => {
  let component: NPServerComponent;
  let fixture: ComponentFixture<NPServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
