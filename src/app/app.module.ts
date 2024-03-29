import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
})
export class AppModule {}
