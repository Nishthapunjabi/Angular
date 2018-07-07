

import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishsetailComponent } from '../dishsetail/dishsetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'aboutus',     component: AboutComponent },
  {path: 'dishsetail/:id', component: DishsetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];