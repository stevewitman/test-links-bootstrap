import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './link/link.component';
import { LinksComponent } from './links/links.component';
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkComponent,
    LinksComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
