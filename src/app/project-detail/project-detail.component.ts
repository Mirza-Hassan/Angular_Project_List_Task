import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from './types';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      const foundProject = this.projectService.getProjects().find((project: Project) => project.id === projectId);
      this.project = foundProject !== undefined ? foundProject : null;
    });
  }
}
