import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path : '', component:DashboardComponent},
  {path : 'login', component:LoginComponent},
  {path : 'register', component:RegisterComponent},
  {path : 'post/add', component:AddPostComponent},
  {path : 'post/edit/:id', component:EditPostComponent},
  {path : 'post/:id', component:PostDetailsComponent},
  {path : 'settings', component:SettingsComponent},
  {path : '**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
