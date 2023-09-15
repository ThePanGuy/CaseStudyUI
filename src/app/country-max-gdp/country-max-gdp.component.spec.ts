import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMaxGdpComponent } from './country-max-gdp.component';

describe('CountryMaxGdpComponent', () => {
  let component: CountryMaxGdpComponent;
  let fixture: ComponentFixture<CountryMaxGdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryMaxGdpComponent]
    });
    fixture = TestBed.createComponent(CountryMaxGdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
