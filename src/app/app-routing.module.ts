import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/pages/Home/home.component';
import { DetailComponent } from './components/pages/Detail/detail.component';
import { CateComponent } from './components/pages/Cate/cate.component';

const routeConfig: Routes = [
  { path: 'cate', component: CateComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, DetailComponent, CateComponent],
  imports: [RouterModule.forRoot(routeConfig), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
