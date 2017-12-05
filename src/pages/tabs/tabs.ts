import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TodayPage} from "../today/today";
import {LaterPage} from "../later/later";
import {CategoriesPage} from "../categories/categories";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  today = TodayPage;
  later = LaterPage;
  categories = CategoriesPage;

}
