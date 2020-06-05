import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Directive } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import{Routes, RouterModule} from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { DataStorage } from './shared/data-storage.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { AuthComponent } from './Auth/auth.component';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeEditComponent,
    AuthComponent,
    RecipeStartComponent,
    DropdownDirective,
    RecipesDetailComponent,

    RecipesItemComponent,

    ShoppingListComponent,


    ShoppingEditComponent

  ],
  imports: [
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonToggleModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    
  
    

    MatNativeDateModule, MatRippleModule  
  ],
  providers: [ShoppingService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
