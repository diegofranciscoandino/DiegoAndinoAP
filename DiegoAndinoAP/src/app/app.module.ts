import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    LogoAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
