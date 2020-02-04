import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasetypeChoiceFormComponent } from './casetype-choice-form.component';

describe('CasetypeChoiceFormComponent', () => {
  let component: CasetypeChoiceFormComponent;
  let fixture: ComponentFixture<CasetypeChoiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasetypeChoiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasetypeChoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
