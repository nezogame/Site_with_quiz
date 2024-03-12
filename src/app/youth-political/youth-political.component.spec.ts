import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthPoliticalComponent } from './youth-political.component';

describe('YouthPoliticalComponent', () => {
  let component: YouthPoliticalComponent;
  let fixture: ComponentFixture<YouthPoliticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthPoliticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouthPoliticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
