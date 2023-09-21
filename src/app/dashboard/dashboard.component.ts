import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from './types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userID: string = '';
  projects: Project[] = [];

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.filterProjectsByUserID();
    });  
  }

  viewProjectDetails(projectId: number): void {
    this.router.navigate(['/project', projectId]);
  }

  filterProjectsByUserID(): void {
    if (this.userID) {
      this.projects = this.projectService.getProjects().filter((project: { productOwnerId: string; }) => {        
        return project.productOwnerId === this.userID;
      });
      this.router.navigate(['/dashboard', this.userID]);
    } else {
      this.projects = this.projectService.getProjects();
    }
  }
}
