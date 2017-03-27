import { DaniePipe } from './danie.component/danie.pipe';
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

  imports: [BrowserModule, HttpModule,FormsModule, RouterModule.forRoot([
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
    }

  ])],
  declarations: [AppComponent, StartComponent, DanieComponent,DaniePipe],
  bootstrap: [AppComponent],
  providers: [AppService, StartService,DanieService]
})
export class AppModule {
}
