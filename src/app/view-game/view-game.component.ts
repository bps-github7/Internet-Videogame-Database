import { Component, OnInit } from '@angular/core';
import { GameService } from '../common/services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../models/game';

@Component({
  selector: 'view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {
    id;
    game: Game; 

    constructor(
    private gameService : GameService,
    private router : Router,
    private route : ActivatedRoute) {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id)
        if (this.id)
        this.gameService.get$(this.id).subscribe(g =>this.game = g);

}

ngOnInit(): void {
}

}
