import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormComponent } from './moduls/master/form/form.component';
import { HomeComponent } from './moduls/master/home/home.component';
import { NotFoundComponent } from './moduls/master/not-found/not-found.component';
import { NvMenuComponent } from './moduls/master/nv-menu/nv-menu.component';
import { FooterComponent } from './moduls/master/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    NotFoundComponent,
    NvMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
