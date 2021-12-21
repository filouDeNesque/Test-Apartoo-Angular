import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { FriendsTabComponent } from './friends-tab/friends-tab.component';

@NgModule({
  declarations: [AppComponent, ConnexionComponent, UserInfosComponent, FriendsTabComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
