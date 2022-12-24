import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './screens/shell/app.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './screens/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './pipes/safe.pipe';
import { FireworkCardComponent } from './components/firework-card/firework-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    HomeComponent,
    SafePipe,
    FireworkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent}, // Default route
      // {path: '**', redirectTo: '', pathMatch: 'full'}, // Wildcard route for a 404 page
      {path: 'home', component: HomeComponent},
      {path: 'productlist/:folderid', component: ProductListComponent}
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
