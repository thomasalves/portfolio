import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    MenuComponent,
    BodyComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    BodyComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class RaizModule { }
