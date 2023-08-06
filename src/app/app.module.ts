import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordCheckerComponent } from './components/password-checker/password-checker.component';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [AppComponent, PasswordCheckerComponent, BarComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
