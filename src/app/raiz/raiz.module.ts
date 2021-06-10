import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    MenuComponent,
    BodyComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    BodyComponent,
    AboutComponent
  ]
})
export class RaizModule { }
