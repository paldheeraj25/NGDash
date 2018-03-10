import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenStateComponent } from './token-state.component';

describe('TokenStateComponent', () => {
  let component: TokenStateComponent;
  let fixture: ComponentFixture<TokenStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
