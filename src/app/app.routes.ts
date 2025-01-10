import {Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ProductsComponent} from './components/products/products.component';
import {RecommendationComponent} from './components/recommendation/recommendation.component';
import {ContactComponent} from './components/contact/contact.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {HomeComponent} from './components/home/home.component';
import {PagePhysicalComponent} from './components/physical/page-physical/page-physical.component';
import {PageMentalComponent} from './components/mental/page-mental/page-mental.component';
import {PageEventsComponent} from './components/events/page-events/page-events.component';
import {ChatComponent} from './shared/chat/chat.component';

export const routes: Routes = [{path: '', component: LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'physical', component: PagePhysicalComponent},
  {path: 'mental', component: PageMentalComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'events', component: PageEventsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'contact', component: ContactComponent}, {path: 'chat', component: ChatComponent},];
