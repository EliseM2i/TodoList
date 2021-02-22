import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TacheComponent } from './tache.component';

@NgModule({
  // composants
  declarations: [ 
    AppComponent,
    TacheComponent
  ],
  // modules
  imports: [
  BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule
    
    
    
  ],
  // services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
