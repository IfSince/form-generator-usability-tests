import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdScenarioComponent } from './third-scenario.component';

describe('ThirdScenarioComponent', () => {
  let component: ThirdScenarioComponent;
  let fixture: ComponentFixture<ThirdScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
