import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {CountryAreaComponent} from "../../country/country-area/country-area.component";

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-toolbar.component.html',
  styleUrls: ['./site-toolbar.component.css']
})
export class SiteToolbarComponent implements OnInit, OnDestroy{
  isDropdownOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.addClickOutsideListener();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  addClickOutsideListener() {
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  handleOutsideClick(event: MouseEvent) {
    if (
      this.isDropdownOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }
}
