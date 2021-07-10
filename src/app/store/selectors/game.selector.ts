import { createSelector } from "@ngrx/store";
import { Game } from "src/app/models/content/game.model";
import * as fromGame from 'src/app/store/reducers/game.reducer';
import { AppState } from "../reducers";


// select by titleSubstring
export const selectByTitleSubstring = (title : string) =>
	createSelector(
		fromGame.selectAll,
		(entities : Game []) => {
			return entities.filter((entity : Game) => (entity.title.toLowerCase()).includes(title.toLowerCase()))
		} 
	)

export const selectEntity = id => createSelector(
	fromGame.selectEntities,
	entities => entities[id]
);

const routeParams = createSelector(
	(state : AppState) => state.router.state,
	(state) => state.params

)

export const getGameByParam = createSelector(
	fromGame.selectAll,
	routeParams,
	(games, { gameId } ) => { 
		return games.filter((game : Game) => game.id === gameId)[0]
	}
)

// select by category
export const selectGamesByCategory = (category: string | string []) => {
	if (typeof(category) === "string") {
		createSelector(
			fromGame.selectAll,
			(entities : Game []) => {
				return entities.filter((game : Game) => game.categories.includes(category))
			}
			)
	}
	else {
		console.log("selector which takes multiple categories must be implemented")
	}
	//need to figure out how to 
	// else if (category.constructor === "Array") {

	// }		
}


// select by creator

// select by platform

// select by console(s)

// select by title

// select by ...