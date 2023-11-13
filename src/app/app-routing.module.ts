import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { DhoklaComponent } from './dhokla/dhokla.component';
import { SweetsComponent } from './sweets/sweets.component';
import { NamkeenComponent } from './namkeen/namkeen.component';
import { SnacksComponent } from './snacks/snacks.component';
import { KhakhraComponent } from './khakhra/khakhra.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dhokla', component: DhoklaComponent },
  { path: 'sweets', component: SweetsComponent },
  { path: 'namkeen', component: NamkeenComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'khakhra', component: KhakhraComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
