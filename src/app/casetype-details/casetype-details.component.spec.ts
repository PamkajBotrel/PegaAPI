import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasetypeDetailsComponent } from './casetype-details.component';

describe('CasetypeDetailsComponent', () => {
  let component: CasetypeDetailsComponent;
  let fixture: ComponentFixture<CasetypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasetypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasetypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
