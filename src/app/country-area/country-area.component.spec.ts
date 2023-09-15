import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAreaComponent } from './country-area.component';

describe('CountryAreaComponent', () => {
  let component: CountryAreaComponent;
  let fixture: ComponentFixture<CountryAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryAreaComponent]
    });
    fixture = TestBed.createComponent(CountryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
