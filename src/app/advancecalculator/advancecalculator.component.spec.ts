import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancecalculatorComponent } from './advancecalculator.component';

describe('AdvancecalculatorComponent', () => {
  let component: AdvancecalculatorComponent;
  let fixture: ComponentFixture<AdvancecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancecalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
