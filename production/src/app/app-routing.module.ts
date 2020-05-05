import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './home';


const routes: Routes = [
  {
    path:'home',component:HomeContainerComponent,
    children:[
      {
        path:'',
        redirectTo:'hot',
        pathMatch:'full'
      },
      {
        path:":targetLink",
        component:HomeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
