import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { CategoriaPage } from '../pages/categoria/categoria';
import { ContactPage } from '../pages/contact/contact';
import { LivroListPage } from '../pages/livro-list/livro-list';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriaProvider } from '../providers/categorias';
import { AmbientePage } from '../pages/ambiente/ambiente';
import { EducacaoPage } from '../pages/educacao/educacao';
import { SustentabilidadePage } from '../pages/sustentabilidade/sustentabilidade';
//import { TabsPageModule } from '../pages/tabs/tabs.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    CategoriaPage,
    ContactPage,
    LivroListPage,
    TabsPage,
    AmbientePage,
    EducacaoPage,
    SustentabilidadePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //TabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    CategoriaPage,
    ContactPage,
    LivroListPage,
    TabsPage,
    AmbientePage,
    EducacaoPage,
    SustentabilidadePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaProvider
  ]
})
export class AppModule {}
