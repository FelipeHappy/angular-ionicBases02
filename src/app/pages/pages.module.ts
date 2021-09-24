import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
