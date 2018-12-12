import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { ContactComponent } from './contact/contact.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PuppiesComponent } from './puppies/puppies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    AboutusComponent,
    MaleComponent,
    FemaleComponent,
    ContactComponent,
    ComingSoonComponent,
    PuppiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
