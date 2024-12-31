import {Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ProductsComponent} from './components/products/products.component';
import {RecommendationComponent} from './components/recommendation/recommendation.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'contact', component: ContactComponent},];
