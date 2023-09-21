import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '../services/project.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private projectService: ProjectService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userID = next.params['userID'];
    const projects = this.projectService.getProjects();
    
    const hasMatchingProject = projects.some((project: { productOwnerId: string; }) => {
      return project.productOwnerId === userID;
    });

    if (hasMatchingProject) {
      return true;

    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
