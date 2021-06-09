import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './features/create-project/create-project.component';
import { ProjectComponent } from './features/project/project.component';
import { AboutComponent } from './layout/about/about.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'new-project',
    component: CreateProjectComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
