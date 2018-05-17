import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSwapComponent } from './block-swap.component';

describe('BlockSwapComponent', () => {
  let component: BlockSwapComponent;
  let fixture: ComponentFixture<BlockSwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSwapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
