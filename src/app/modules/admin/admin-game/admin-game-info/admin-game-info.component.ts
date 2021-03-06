import { Preferences } from './../../../../models/user/preferences';
import { Observable } from 'rxjs/Observable';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameInfo } from 'src/app/models/content/game-info.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admin-game-info',
  templateUrl: './admin-game-info.component.html',
  styleUrls: ['./admin-game-info.component.sass']
})
export class AdminGameInfoComponent implements OnInit {

	@Input() familyName : string; 
	@Input() gameInfo$ : Observable<any>
	@Input() singularName : string;
	placeholder : string; 


	@Output() createEvent$ = new EventEmitter<GameInfo>();
	@Output() updateEvent$ = new EventEmitter<{id : string, data : Partial<GameInfo>}>();

	@Output() deleteEvent$ = new EventEmitter<string>();

	updateContent : any =  {title : "", description : ""}
	updateId : string;
	notUpdated : boolean = true;


	showDescription : boolean = false;
	
	mode = "create"
	// update should technically be completely internal to this component. 

  constructor() { }

  ngOnInit(): void {
		this.placeholder = `enter new ${this.singularName}`;
	}

	reset(formValue : NgForm) {
		formValue.resetForm();
	}

	create(formValue : NgForm) {
		if (this.mode === 'edit') {
			this.update(formValue);
			return;
		}
		this.createEvent$.emit({
			title : formValue.controls['title'].value,
			description :  formValue.controls['description'].value,
			family : this.singularName
		})
		this.reset(formValue);	
	}

	setUpUpdate(gameInfo : GameInfo) {
		// got a weird bug not sure where its taking plaece... mess around with update to see it
		this.updateContent = {title : gameInfo.title, description : gameInfo.description} 
		this.updateId = gameInfo.id 
		this.mode = 'edit'
	}

	checkUpdate(formValue : NgForm) {
		/* We only want to emit updateEvent if the user changed something */
		if (this.mode === 'create') {
			return
		}
		this.notUpdated = formValue.pristine ? true : false;
		// if (formValue.pristine ) {
		// 	this.notUpdated = true;
		// }
		// else {
		// 	this.notUpdated = false
		// }
	}

	update(formValue : NgForm) {
		this.updateEvent$.emit({
			id : this.updateId,
			data : {
				title : formValue.controls['title'].value,
				description :  formValue.controls['description'].value,
				family : this.singularName
			}
		})
		this.mode = "create";
		//this part is important...
		this.updateContent =  {title : "", description : ""}
		this.notUpdated = true;
		this.reset(formValue);
	}

	delete(id : string) {
		if(confirm("Are you sure you want to delete this? Warning: cannot be undone"))
			this.deleteEvent$.emit(id);
		return;
	}
}
