import {Component} from 'angular2/core';
 
import {Hero} from './hero';

@Component({
    selector : 'heros-list',
    styleUrls : ['app/herosList/herosList.css'],
    templateUrl : 'app/herosList/herosList.html'
})
export class HerosList{
    constructor(){}
    heros : Hero[] = [
       {id : 1, name :"Murali Krishna", industry :"Movie"},
       {id : 2, name :"Tata", industry :"Automobile"}
    ]
}