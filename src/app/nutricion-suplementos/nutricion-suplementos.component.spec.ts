import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionSuplementosComponent } from './nutricion-suplementos.component';

describe('NutricionSuplementosComponent', () => {
  let component: NutricionSuplementosComponent;
  let fixture: ComponentFixture<NutricionSuplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutricionSuplementosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutricionSuplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
