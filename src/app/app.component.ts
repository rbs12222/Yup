import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {TutorialsPage} from "../pages/tutorials/tutorials";
import {TasksPage} from "../pages/tasks/tasks";
import {SettingsPage} from "../pages/settings/settings";
import {NotesPage} from "../pages/notes/notes";
import {AboutPage} from "../pages/about/about";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Home', component: TabsPage },
    { title: 'Tutorial', component: TutorialsPage },
    { title: 'To Do List', component: TasksPage},
    { title: 'Settings', component: SettingsPage},
    { title: 'Notes', component: NotesPage},
    { title: 'About', component: AboutPage}

  ];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

