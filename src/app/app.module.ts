import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewComponent } from './view/view.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PstService } from './services/pst.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdatecarComponent } from './updatecar/updatecar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewComponent,
    PostComponent,
    UpdatecarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
