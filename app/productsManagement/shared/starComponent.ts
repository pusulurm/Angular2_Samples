import {Component, OnChanges, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector : 'show-stars',
    templateUrl : 'app/productsManagement/shared/star.component.html',
    styleUrls : ['app/productsManagement/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    constructor(){
        
    }
    @Input() rating : number;
    starWidth : number;
    ngOnChanges() : void{
        this.starWidth = this.rating * 86/5;
    }
    @Output() notify : EventEmitter<string> = new EventEmitter<string>();
    onClicked(){
        this.notify.emit("Clicked");
    }
}