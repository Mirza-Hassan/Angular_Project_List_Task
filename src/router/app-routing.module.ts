import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ProjectDetailComponent } from '../app/project-detail/project-detail.component';
import { AuthGuard } from '../guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:userID', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'project/:id', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
