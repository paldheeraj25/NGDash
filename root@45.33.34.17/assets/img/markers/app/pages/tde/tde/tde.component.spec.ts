import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeComponent } from './tde.component';

describe('TdeComponent', () => {
  let component: TdeComponent;
  let fixture: ComponentFixture<TdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
