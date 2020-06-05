import { Ingredient } from '../shared/ingredients.model';
import { Subject} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PizzaPartyComponent } from '../recipes/recipes-detail/snackbar.component';

export class ShoppingService{
    durationInSeconds=10;

    startedEditing=new Subject<number>();
    ingchanged =new Subject<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('Apples', 4),
        new Ingredient('Potato' , 20),
        new Ingredient('Salt',10),
        new Ingredient('Tomatos',30)
    
      ];

      getIngredients(){
        return this.ingredients.slice(); //returns new array which is an copy of the array
    }
    
    getIngredient_2(index:number){
        return this.ingredients[index];

    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingchanged.next(this.ingredients.slice());

    }
    addIngreidents_2(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingchanged.next(this.ingredients.slice());
        
        
    }
   
    updateIng(index : number, newing: Ingredient)
    {
        this.ingredients[index]=newing;
        this.ingchanged.next(this.ingredients.slice());
    }
     deleteIng(index :number){
      this.ingredients.splice(index,1);
      this.ingchanged.next(this.ingredients.slice());
    }

}