import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbestinfoComponent } from './angularbestinfo.component';

describe('AngularbestinfoComponent', () => {
  let component: AngularbestinfoComponent;
  let fixture: ComponentFixture<AngularbestinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularbestinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularbestinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
