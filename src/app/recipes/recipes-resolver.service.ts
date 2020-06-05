import { Injectable } from '@angular/core';
import { DataStorage } from '../shared/data-storage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private datastorage:DataStorage
        , private recipeservice :RecipeService){}
        resolve(route : ActivatedRouteSnapshot,state: RouterStateSnapshot)
        {
            const recipe=this.recipeservice.gerRecipe()
            if(recipe.length===0)
            return this.datastorage.fetchRecipes();
            else
            return recipe;
        }
    
}