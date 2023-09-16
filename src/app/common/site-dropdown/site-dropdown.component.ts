import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-site-dropdown',
  templateUrl: './site-dropdown.component.html',
  styleUrls: ['./site-dropdown.component.css']
})
export class SiteDropdownComponent {
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
