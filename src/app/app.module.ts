import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';

@NgModule({
  // composants
  declarations: [ 
    AppComponent
  ],
  // modules
  imports: [
    BrowserModule,
    MatCardModule
  ],
  // services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
