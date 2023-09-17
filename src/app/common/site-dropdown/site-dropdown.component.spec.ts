import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SiteDropdownComponent} from './site-dropdown.component';

describe('SiteDropdownComponent', () => {
  let component: SiteDropdownComponent;
  let fixture: ComponentFixture<SiteDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteDropdownComponent]
    });
    fixture = TestBed.createComponent(SiteDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
