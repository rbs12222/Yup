import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {AddCategoryPage} from "../pages/add-category/add-category";
import {AddNotePage} from "../pages/add-note/add-note";
import {AddTaskPage} from "../pages/add-task/add-task";
import {NotesPage} from "../pages/notes/notes";
import {LaterPage} from "../pages/later/later";
import {TodayPage} from "../pages/today/today";
import {TutorialsPage} from "../pages/tutorials/tutorials";
import {CategoriesPage} from "../pages/categories/categories";
import {SettingsPage} from "../pages/settings/settings";
import {AboutPage} from "../pages/about/about";
import {TasksPage} from "../pages/tasks/tasks";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AddCategoryPage,
    AddNotePage,
    AddTaskPage,
    NotesPage,
    LaterPage,
    TodayPage,
    TutorialsPage,
    CategoriesPage,
    SettingsPage,
    AboutPage,
    TasksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddCategoryPage,
    AddNotePage,
    AddTaskPage,
    NotesPage,
    LaterPage,
    TodayPage,
    TutorialsPage,
    CategoriesPage,
    SettingsPage,
    AboutPage,
    TasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
