import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voting16Component } from './voting16.component';

describe('Voting16Component', () => {
  let component: Voting16Component;
  let fixture: ComponentFixture<Voting16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voting16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Voting16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
