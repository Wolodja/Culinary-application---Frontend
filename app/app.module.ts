import { StartComponent } from './start.component/start.component';
import { StartService } from './start.component/start.service';
import { AppService } from './app.service';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({

  imports: [BrowserModule,HttpModule],
  declarations: [AppComponent, StartComponent],
  bootstrap: [AppComponent,StartComponent],
  providers: [AppService, StartService]
})
export class AppModule {
}
