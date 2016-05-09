import {Component} from 'angular2/core';

@Component({
    selector : 'child-element',
    styleUrls : ['app/childComponent/childStyles.css'], /**/
    templateUrl : 'app/childComponent/childTemplate.html' /**/
})
export class ChildComponent{
    childMessage : string = "This message is from child component";
}