import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NgxQuickDialogModule } from '../lib';
import { DynamicTextComponent } from './dynamic-text/dynamic-text.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicTextComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxQuickDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
