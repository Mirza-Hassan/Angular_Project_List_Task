import { Injectable } from '@angular/core';
import { Project } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private projects = [
    { id: 1, title: 'Project 1', createdDate: '2023-09-21', productOwnerId: '1234' },
    { id: 2, title: 'Project 2', createdDate: '2023-09-22', productOwnerId: '5678' },
    { id: 3, title: 'Project 3', createdDate: '2023-09-23', productOwnerId: '1234' },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

}

