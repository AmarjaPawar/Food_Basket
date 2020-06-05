import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode= false;
recipeF: FormGroup;
  constructor(private route:ActivatedRoute,
              private recipeservice:RecipeService,
              private router: Router) { }

  ngOnInit(): void {
this.route.params
.subscribe(
(params: Params) =>{
  this.id=+params['id'];
  this.editMode =params['id']!=null;
  this.initForm();
}
);
   
  }
  
  onSubmit(){
    const newRec= new Recipe(this.recipeF.value['name'],
    this.recipeF.value['description'],

    this.recipeF.value['imgPath'],
    this.recipeF.value['ingredients']);
    if(this.editMode){
      this.recipeservice.updateRecipe(this.id,newRec);

    }
    else{
      this.recipeservice.addRecipe(newRec);
    }

    this.onCancel();
  }
  onAddIngredients(){
    (<FormArray>this.recipeF.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(index:number)
{
  (<FormArray>this.recipeF.get('ingredients')).removeAt(index);
}


  onCancel(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }
  get controls(){
    return (<FormArray>this.recipeF.get('ingredients')).controls;
  }
  private initForm(){
    let recName='';
    let recImg='';
    let recDesc='';
    let recIngredients =new FormArray([]);


    if(this.editMode){
      const recipe= this.recipeservice.getRecipe(this.id);
      recName= recipe.name;
      recImg=recipe.imagePath;
      recDesc=recipe.description;

      if(recipe['ingredients']){

        for(let ingredient of recipe.ingredients){
          recIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
        }
      }

    this.recipeF= new FormGroup(
      {
        'name': new FormControl(recName,Validators.required),
        'imgPath': new FormControl(recImg,Validators.required),
        'description': new FormControl(recDesc,Validators.required),
        'ingredients': recIngredients
      }
    );
  }


}
