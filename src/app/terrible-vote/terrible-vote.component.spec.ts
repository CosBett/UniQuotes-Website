import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerribleVoteComponent } from './terrible-vote.component';

describe('TerribleVoteComponent', () => {
  let component: TerribleVoteComponent;
  let fixture: ComponentFixture<TerribleVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerribleVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerribleVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
