import { Component, OnInit } from '@angular/core';
import { Projects } from './projets';
import { PROJETOS } from './mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  Projects = PROJETOS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.Projects)
  }

}
