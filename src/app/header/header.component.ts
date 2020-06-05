import { Component} from '@angular/core';
import { DataStorage } from '../shared/data-storage.service';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector :'app_header',
    templateUrl : './header.component.html',
    styleUrls:['./header.css']
})
export class HeaderComponent{
constructor(private datastorage : DataStorage,private _snackBar: MatSnackBar){

}
durationInSeconds:number;
onSaveData(){
    this.datastorage.storeRecipes();
    this._snackBar.open('Recipes Saved 🍕', 'Dismiss', {
        duration: 3000
      });
}
onFetchData(){   
    
    this.datastorage.fetchRecipes().subscribe();
    this._snackBar.open('Recipes Loading...', 'Dismiss', {
        duration: 3000
      });
}

}