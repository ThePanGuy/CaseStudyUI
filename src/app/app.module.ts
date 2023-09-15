import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteMenuComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
