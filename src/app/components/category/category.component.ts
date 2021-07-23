import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];

  currentCategory:Category;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    //Asenkron çalışmaları subscribe ile hallediyoruz
    //Aynı anda çalışan methodlarda, uzun olan method geride kalıyor
    //Üste yazılmasına rağmen
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  /*setCurrentCategoryAll(){
    //this.currentCategory={} as Category;
    //this.currentCategory=<Category>{};
    this.currentCategory= {categoryId:0,categoryName:"Tüm Ürünler"};
  }

  getAllCategoriesClass(){
    if(this.currentCategory.categoryName == "Tüm Ürünler"){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }*/
}
