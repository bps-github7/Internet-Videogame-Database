import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rating } from '../models/content/rating';
import { StarService } from '../star.service';


//default object for filling in prior to users providing a rating...
class Star implements Rating {
    userId = null;
    gameId = null;
    value = 0;
}


@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
    stars: Rating;
    avgRating: Observable<any>;
    

    @Input() userId;
    @Input() gameId;

    constructor(private starsService : StarService, private router : Router) {
    }


    ngOnInit(): void {
        //to prevent rating documents being created if user is not logged in.
        if(!this.userId) { return; }
        this.starsService.getRatingAsPromise(this.userId, this.gameId).then((rating : Rating) => {
            //adding return so that this method exits. ratings were getting stuck on zero
            if (rating) {
                this.stars = rating;
                return; 
            } else {
                console.log("rating does not exist for this game...")
                this.stars = new Star();
            }
        }).catch((err) => {
            console.log("error when creating rating: " + err);
        })
    }

    fakeStarHandler() {
        if (confirm("you must log in or create an account to rate games. \nDo you want to log in to account?")) {
            this.router.navigate(['../../sign_in']);
        }
        return;
    }

    starHandler(value) {
        this.starsService.setRating(this.userId, this.gameId, value)
        .then(() => console.log("rating succesfully created with value: " + value))
        .catch((err) => console.log("error when creating rating: " + err));
    }

}
