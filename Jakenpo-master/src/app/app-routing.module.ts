import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SplahComponent } from './splah/splah.component';

const routes: Routes = [
  {path:'',component: SplahComponent},
  {path:'inicio',component:SplahComponent},
    {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
