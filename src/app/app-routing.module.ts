import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { RepositoryComponent } from './component/repository/repository.component';

const routes: Routes = [
  {path: 'users' , component:UserComponent},
  {path: 'repositories' , component:RepositoryComponent},
  {path: '', redirectTo:'/users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
