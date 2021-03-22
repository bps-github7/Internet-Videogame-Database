//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Custom / user modules
import { ForumModule } from './modules/forum/forum.module';
import { ContentModule } from './modules/content/content.module';
import { ContributionsModule } from './modules/contributions/contributions.module';
import { GamesModule } from  './modules/games/games.module';

import { AppComponent } from './app.component';
import { ServicesModule } from './common/services/services.module';
import { AppRoutingModule, RoutingComponents } from './app.routing';


import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    RoutingComponents,
    AppComponent
],
  imports: [
    ForumModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ServicesModule.forRoot(),
    AppRoutingModule
    // RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
