import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NobelDataComponent } from './nobel-data/nobel-data.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { YearfilterPipe } from './pipes/yearfilter.pipe';
import { YearcategoryfilterPipe } from './pipies/yearcategoryfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NobelDataComponent,
    YearfilterPipe,
    YearcategoryfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
