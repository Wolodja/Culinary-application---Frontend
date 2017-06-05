import { LoginlService } from './login/login.service';
import { RegisterComponent } from './login/register.component/register.component';
import { LoginComponent } from './login/login.component/login.component';
import { AddService } from './add.component/add.service';
import { AddComponent } from './add.component/add.component';
import { Detail2 } from './search.component/detail2.component/detail2.component';
import { Danie2 } from './search.component/danie2.component/danie2.component';
import { SearchService } from './search.component/search.service';
import { Search3 } from './search.component/search3.component/search3.component';
import { Search2 } from './search.component/search2.component/search2.component';
import { Search1 } from './search.component/search1.component/search1.component';
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
import { FormsModule } from '@angular/forms';




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
    },
    {
      path: 'step1',
      component: Search1
    },
    {
      path: 'step2',
      component: Search2
    },
    {
      path: 'step3',
      component: Search3
    },
    {
      path: 'result',
      component: Danie2
    },
    {
      path: 'detail',
      component: Detail2
    },
    {
      path: 'add',
      component: AddComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    }
  ])],
  declarations: [AppComponent, LoginComponent, RegisterComponent, StartComponent,
    DanieComponent, DetailComponent, Search1, Search2, Search3, Danie2, Detail2, AddComponent],
  bootstrap: [AppComponent],
  providers: [AppService, LoginlService, StartService, DanieService, DetailService, SearchService, AddService]
})
export class AppModule {
}
