import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishingComponent } from './wishing.component';

describe('WishingComponent', () => {
  let component: WishingComponent;
  let fixture: ComponentFixture<WishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
