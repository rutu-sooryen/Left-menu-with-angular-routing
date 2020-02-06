import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubMenuItem1Component } from './components/sub-menu-item1/sub-menu-item1.component';
import { SubMenuItem2Component } from './components/sub-menu-item2/sub-menu-item2.component';
import { NestedMenuItem1Component } from './components/nested-menu-item1/nested-menu-item1.component';
import { NestedMenuItem2Component } from './components/nested-menu-item2/nested-menu-item2.component';

@NgModule({
  declarations: [
    AppComponent,
    SubMenuItem1Component,
    SubMenuItem2Component,
    NestedMenuItem1Component,
    NestedMenuItem2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
