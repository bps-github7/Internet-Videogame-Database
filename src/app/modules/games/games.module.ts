import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStoreModule } from './games.index';
import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GamesComponent } from './games.component';
import { GameViewComponent } from './game-view/game-view.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { GameInfoPanelComponent } from './game-info-panel/game-info-panel.component';

@NgModule({
  declarations: [
		GamesComponent, 
		GameViewComponent, 
		GameBrowserComponent, 
		GameInfoPanelComponent
	],
  imports: [
    CommonModule,
    GamesRoutingModule,
		GameStoreModule,
    SharedModule
  ]
})
export class GamesModule { }
