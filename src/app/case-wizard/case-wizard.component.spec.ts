import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseWizardComponent } from './case-wizard.component';

describe('CaseWizardComponent', () => {
  let component: CaseWizardComponent;
  let fixture: ComponentFixture<CaseWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
