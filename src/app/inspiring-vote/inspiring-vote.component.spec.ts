import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiringVoteComponent } from './inspiring-vote.component';

describe('InspiringVoteComponent', () => {
  let component: InspiringVoteComponent;
  let fixture: ComponentFixture<InspiringVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspiringVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiringVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
