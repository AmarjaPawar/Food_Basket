import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgForm } from '@angular/forms';

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html',
    styleUrls:['./auth.css']
})

export class AuthComponent{
    hide = true;

    isLoginMode=true;
    onSwitchMode(){
        this.isLoginMode= !this.isLoginMode;
    }
    onSubmit(form:NgForm){
        console.log(form.value);
        form.reset();
    }
}