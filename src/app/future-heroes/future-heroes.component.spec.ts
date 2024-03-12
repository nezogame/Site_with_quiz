import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureHeroesComponent } from './future-heroes.component';

describe('FutureHeroesComponent', () => {
  let component: FutureHeroesComponent;
  let fixture: ComponentFixture<FutureHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureHeroesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FutureHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
