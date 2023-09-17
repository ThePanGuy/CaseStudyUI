import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-site-toolbar',
  templateUrl: './site-toolbar.component.html',
  styleUrls: ['./site-toolbar.component.css']
})
export class SiteToolbarComponent {
  isDropdownOpen: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

}
