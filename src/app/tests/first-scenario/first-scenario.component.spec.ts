import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScenarioComponent } from './first-scenario.component';

describe('FirstScenarioComponent', () => {
  let component: FirstScenarioComponent;
  let fixture: ComponentFixture<FirstScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
