import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditStreamComponent } from 'src/app/admin/forms/edit-stream/edit-stream.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  form: FormGroup;
  firstName = {
    type: "text",
    label : "first name",
    formControlName: "first"
  };
  lastName = {
    type: "text",
    label : "last name",
    formControlName: "last"
  };
  about = {
    type : "textarea",
    label : "about",
    formControlName : "about"
  };
  nicknames = {
    type : "multi",
    label : "enter all nicknames",
    formControlName : "nicknames"
  };
  breakfeast = {
    type : "select",
    label : "choose your breakfeast weapon",
    formControlName : "breakfeast",
    options : ["bagel","frenchtoast","waffle","yappel~strudel"]
  };
  dogs = {
    type : "multiple select",
    label : "which cute fluffs are the bestest bois",
    formControlName: "dogs",
    options : ["Corgis", "Golden Bois", "Red Mearle Fluffs", "Blue Mearle Fluffs"]
  };
  politics = {
    type: "radio",
    label : "which animal do you do",
    formControlName : "politics",
    options : ["red donkey", "blue ass elephant"]
  }
  ingredients = {
    type: "checkbox",
    label: "you put THAT on your pizza??!!",
    formControlName: "ingredients",
    options: ["pinnaple","artichoke","chopped garlic","goat cheese","garlic pesto sauce", "mozzeralla","classic red sauce","chicken","bacon"]

  }

  constructor(private fb : FormBuilder,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first : [""],
      last : [""],
      about : [""],
      nicknames : this.fb.array([]),
      breakfeast : [""],
      dogs : [""],
      politics : [""],
      ingredients : this.fb.array([]),
    })
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '1600px';
    dialogConfig.width = `1200px`;
    // dialogConfig.data = updateObject

    // console.log(`openDialog got this: ${uid}`)

    this.openStreamDialog(dialogConfig)

  }

  openStreamDialog(config) {
    this.dialog.open(EditStreamComponent,config)   
  }


  
}
