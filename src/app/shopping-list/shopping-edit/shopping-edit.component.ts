import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

@ViewChild('s',{static:false}) shoppingForm: NgForm;

  constructor(private shoppingservice:ShoppingService) { }
subscription:Subscription;
editMode=false;
edittedItemIndex:number;
editedItem:Ingredient;
  ngOnInit() {
   this.subscription= this.shoppingservice.startedEditing
    .subscribe(
      (index:number)=>{
        this.editMode=true;
        this.edittedItemIndex=index;
        this.editedItem=this.shoppingservice.getIngredient_2(index);
        console.log(this.editedItem.name);
        this.shoppingForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }

  onDelete(){
    this.shoppingservice.deleteIng(this.edittedItemIndex);
    this.onClear();
  }

  onClear()
  {
    this.shoppingForm.reset();
    this.editMode=false;
  }

  onAdd(form: NgForm){
      const value= form.value;
      const newing =new Ingredient(value.name,value.amount);
    
      if(this.editMode)
      {
        this.shoppingservice.updateIng(this.edittedItemIndex,newing);
      }
      else
      this.shoppingservice.addIngredient(newing);

      this.editMode=false;
      form.reset();
    }
    ngOnDestroy(){
     this.subscription.unsubscribe();
    }
  }

