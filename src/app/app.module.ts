import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanthoshComponent } from './santhosh/santhosh.component';
import { HtmlComponent } from './html/html.component';

@NgModule({
  declarations: [
    AppComponent,
    SanthoshComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
