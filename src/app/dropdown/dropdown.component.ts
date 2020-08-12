import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

    user: firebase.User;

    constructor(private afAuth : AngularFireAuth) { 
        afAuth.authState.subscribe(user => this.user = user)
    }


    logout() {
        this.afAuth.signOut();
    }
}
