import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';
import { MatSnackBar, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class RecipeService{

   recipesChanged=new Subject<Recipe[]>();
   
   
   private recipes : Recipe[] =
   [
       new Recipe('Spaghetti',
   'Quick & Easy Spaghetti Bolognese',
   'https://asset-apac.unileversolutions.com/content/dam/unilever/global/recipe_image/110/11064/110641-default.jpg/_jcr_content/renditions/cq5dam.web.800.600.jpeg',
   [
       new Ingredient('Tomato', 4),
       new Ingredient('Chesse',5),
       new Ingredient('Dried oregano',2)
   ])
   ,new Recipe('Lasagna','Quick & Easy Lasagna','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sweetp-potato-lasagna-horizontal-1534179686.jpg',
   [
       new Ingredient('Garlic Cloves',2),
       new Ingredient('Red Chilli',1),
       new Ingredient('Mozzarella cheese',1),
       new Ingredient('Dried basil leaves', 4),
       new Ingredient('Lasagna noodles', 1),

   ])
   ,new Recipe('Strawberry Spinach Salad','Healthy Strawberry Spinach Salad','https://media.istockphoto.com/photos/colorful-salad-of-grilled-chicken-with-summer-berries-and-herbs-picture-id1063210218?k=6&m=1063210218&s=612x612&w=0&h=k8FPqmOCs7WpsPY8BGV8DFUKDr64XHSp5t7i3pWzKsw=',
   [
       new Ingredient('Garlic Cloves',2),
       new Ingredient('Spinach',1),
       new Ingredient('Strawberry',1),
       new Ingredient('Almonds', 4),
       new Ingredient('Paprika', 1),

   ])
   ,new Recipe('Thai Coconut Soup','Delicious & Creamy Coconut Soup','https://media.istockphoto.com/photos/spicy-chicken-in-a-sauce-of-coconut-milk-closeup-in-a-pan-horizontal-picture-id1053423480?k=6&m=1053423480&s=170667a&w=0&h=Ymk4-q3F-e1cJ6g8bq2BO0tzpfG4lWZ_rK5Uz_NhGTg=',
   [
       new Ingredient('Coconut Milk',2),
       new Ingredient('Mushrooms',1),
       new Ingredient('Ginger',1),
       new Ingredient('Lime', 4),
       new Ingredient('Paprika', 1),

   ]),new Recipe('Guacamole','The Best Chunky Guacamole','https://www.willcookforsmiles.com/wp-content/uploads/2014/08/Amazing-Guacamole-Recipe-3-from-willcookforsmiles.com_.jpg',
   [
       new Ingredient('Avocado',2),
       new Ingredient('Jalapeno',1),
       new Ingredient('Ginger',1),
       new Ingredient('Lime', 4),
       new Ingredient('Paprika', 1),

   ])

 ];
 

    constructor(private shoppingservice:ShoppingService){

    }
    setRecipes(recipes:Recipe[]){

        this.recipes= recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

  gerRecipe(){
    return this.recipes.slice();
  }
  getRecipe(id:number){
    return this.recipes[id];
}
 addIngToShoppingList(ingredients: Ingredient[])
 {
    this.shoppingservice.addIngreidents_2(ingredients);
 }
 

 addRecipe(recipe:Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes);
 }
updateRecipe(index:number,newRec:Recipe){
this.recipes[index]=newRec;
this.recipesChanged.next(this.recipes.slice());

}
deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
    
    }


}

