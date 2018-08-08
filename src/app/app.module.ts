import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import {UserService} from './shared/services/user.service';
import {AuthService} from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
