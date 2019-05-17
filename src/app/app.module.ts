import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChordsInputComponent } from './components/chords-input/chords-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordsInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
