import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestedComponent } from './invested.component';

describe('InvestedComponent', () => {
  let component: InvestedComponent;
  let fixture: ComponentFixture<InvestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
