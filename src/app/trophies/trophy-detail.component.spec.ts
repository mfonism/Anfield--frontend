import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyDetailComponent } from './trophy-detail.component';

describe('TrophyDetailComponent', () => {
  let component: TrophyDetailComponent;
  let fixture: ComponentFixture<TrophyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrophyDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
