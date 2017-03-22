import { DanieComponent } from './danie.component/danie.component';
import { StartComponent } from './start.component/start.component';
import { StartService } from './start.component/start.service';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'


@NgModule({

  imports: [BrowserModule, HttpModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'danies',
      component: DanieComponent
    },
    {
      path: 'dashboard',
      component: StartComponent
    }

  ])],
  declarations: [AppComponent, StartComponent, DanieComponent],
  bootstrap: [AppComponent],
  providers: [AppService, StartService]
})
export class AppModule {
}
