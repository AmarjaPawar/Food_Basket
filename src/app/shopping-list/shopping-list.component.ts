import { Component, OnInit, OnDestroy } from '@angular/core';
import{ Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients: Ingredient[];
  private subscription :Subscription;
  constructor(private shoppingservice:ShoppingService) { 

    
  }
  

  ngOnInit() {
    this.ingredients =this.shoppingservice.getIngredients();
    this.subscription=this.shoppingservice.ingchanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  onEditItem(index :number)
  {
    this.shoppingservice.startedEditing.next(index);

  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
  
}
