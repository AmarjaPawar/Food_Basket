import { Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit ,OnDestroy{
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeservice: RecipeService,
    private router:Router,
    private route:ActivatedRoute ) {
   }
  ngOnInit() {
      this.subscription=this.recipeservice.recipesChanged
      .subscribe(
      (recipes:Recipe[])=>{
          this.recipes=recipes;
      }
    );
    this.recipes= this.recipeservice.gerRecipe();

  }
  
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }
}
