import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { ViewComponent } from './view/view.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:"welcome",component:WelcomeComponent},
  {path:"home",component:AppComponent},
  {path:"view",component:ViewComponent},
  {path:"post",component:PostComponent},
  {path:"updatecars/:id",component:UpdatecarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
