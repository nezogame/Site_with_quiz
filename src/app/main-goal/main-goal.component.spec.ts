import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGoalComponent } from './main-goal.component';

describe('MainGoalComponent', () => {
  let component: MainGoalComponent;
  let fixture: ComponentFixture<MainGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGoalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
