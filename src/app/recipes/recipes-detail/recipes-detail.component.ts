import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PizzaPartyComponent } from './snackbar.component';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  durationInSeconds=5;
  constructor(private recipeservice:RecipeService,
    private route: ActivatedRoute,
    private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params)=>{
          this.id=+params['id'];
          this.recipe=this.recipeservice.getRecipe(this.id);
      }
    );
  }
  openSnackBar() {
  
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 500,
    });
  }
  toShoppingList(){
    this.openSnackBar();
    this.recipeservice.addIngToShoppingList(this.recipe.ingredients);
  }
  onEdit(){
    this.router.navigate(['edit'],{ relativeTo:this.route});
    
  }
  ondelete(){
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    this._snackBar.open('Recipe Deleted','Dismiss', {
      duration: 3000
    });
  }
}
