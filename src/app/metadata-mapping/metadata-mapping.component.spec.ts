import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataMappingComponent } from './metadata-mapping.component';

describe('MetadataMappingComponent', () => {
  let component: MetadataMappingComponent;
  let fixture: ComponentFixture<MetadataMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
