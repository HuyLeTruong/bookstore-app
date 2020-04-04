import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/blocks/Menu/menu.component';
import { SliderComponent } from './components/blocks/Slider/slider.component';
import { CategoriesComponent } from './components/blocks/Categories/categories.component';
import { UserComponent } from './components/blocks/User/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UserComponent,
    CategoriesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
