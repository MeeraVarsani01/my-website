import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DhoklaComponent } from './dhokla/dhokla.component';
import { SweetsComponent } from './sweets/sweets.component';
import { NamkeenComponent } from './namkeen/namkeen.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { KhakhraComponent } from './khakhra/khakhra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DhoklaComponent,
    SweetsComponent,
    NamkeenComponent,
    SnacksComponent,
    ProductDetailsComponent,
    KhakhraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
