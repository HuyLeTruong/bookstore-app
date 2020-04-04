import { Component } from '@angular/core';

import { CategoryServices } from '../../../Services/category.module';

@Component({
  selector: 'categories',
  templateUrl: 'Categories.component.html',
  providers: [CategoryServices]
})
export class CategoriesComponent {
  arrCate: any = [];

  constructor(private cateService: CategoryServices) {
    cateService.getCategory().subscribe(data => {
      console.log(data);
      this.arrCate = data;
    });
  }
}
