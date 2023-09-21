import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule} from '../router/app-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [AppComponent, ProjectDetailComponent, DashboardComponent],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
