import { DetailService } from './detail.component/detail.service';
import { DetailComponent } from './detail.component/detail.component';
import { DanieService } from './danie.component/danie.service';
import { DanieComponent } from './danie.component/danie.component';
import { StartComponent } from './start.component/start.component';
import { StartService } from './start.component/start.service';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';



@NgModule({

  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'danies/:name',
      component: DanieComponent
    },
    {
      path: 'dashboard',
      component: StartComponent
    },
    {
      path: 'detail/:id',
      component: DetailComponent
    }

  ])],
  declarations: [AppComponent, StartComponent, DanieComponent, DetailComponent],
  bootstrap: [AppComponent],
  providers: [AppService, StartService, DanieService, DetailService]
})
export class AppModule {
}
