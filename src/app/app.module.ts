import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterNewsComponent } from './components/center-news/center-news.component';
import { SideNewsComponent } from './components/side-news/side-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterNewsComponent,
    SideNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
