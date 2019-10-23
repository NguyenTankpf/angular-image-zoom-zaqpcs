import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
// Import the library 

@NgModule({
  imports:      [ BrowserModule, FormsModule,PinchZoomModule   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
