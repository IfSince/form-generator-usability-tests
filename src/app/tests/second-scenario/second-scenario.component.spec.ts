import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScenarioComponent } from './second-scenario.component';

describe('SecondScenarioComponent', () => {
  let component: SecondScenarioComponent;
  let fixture: ComponentFixture<SecondScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
