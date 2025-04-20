import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnfooterComponent } from './btnfooter.component';

describe('BtnfooterComponent', () => {
  let component: BtnfooterComponent;
  let fixture: ComponentFixture<BtnfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
