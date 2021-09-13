import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {path: 'lists', component: ListsComponent},
  {path: 'list/:id', component: ListComponent},
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
