import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { RepositoryComponent } from './component/repository/repository.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {path: 'users' , component:UserComponent},
  {path: 'repositories' , component:RepositoryComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo:'/users', pathMatch:'full'},
  {path: '**', component:NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
