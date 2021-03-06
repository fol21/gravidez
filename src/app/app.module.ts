import { NgModule, ErrorHandler, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { VacinasPage } from "../pages/vacinas/vacinas";
import { VacineModalPage} from "../pages/vacine-modal/vacine-modal";
import { CreateEventPage } from "../pages/create-event/create-event";
import { MapPage } from "../pages/map/map";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database"
import { environment } from "../environments/environments";
import { CalendarModule } from 'ionic3-calendar-en';
import { AgmCoreModule } from '@agm/core';
import { DatabaseProvider } from '../providers/database/database';
import { PacienteService } from '../services/PacienteService';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    VacinasPage,
    CreateEventPage,
    MapPage,
    VacineModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCs--01SRJvpBLmaxKQ1CX7kR_Fk3paSco'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    VacinasPage,
    CreateEventPage,
    MapPage,
    VacineModalPage,
    CreateEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    PacienteService
  ]
})
export class AppModule {}
