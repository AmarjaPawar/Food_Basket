import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './Auth/auth.component';


const appRoutes: Routes =[
{path : '', redirectTo:'/recipes',pathMatch: 'full'},
{path : 'recipes', component:RecipesComponent,children:[
    {path: '',component:RecipeStartComponent},
    {path: 'new',component:RecipeEditComponent},
    {path: ':id',component:RecipesDetailComponent,resolve: [RecipeResolverService]},
    {path: ':id/edit',component:RecipeEditComponent,resolve: [RecipeResolverService]},

]},
{    path: 'shopping-list',component:ShoppingListComponent},
{    path: 'login-page',component:AuthComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}