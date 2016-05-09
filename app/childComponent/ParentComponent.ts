import {Component} from 'angular2/core';
import {ChildComponent} from './childComponent';

@Component({
    selector : 'parent-element',
    template : `
        <h2>{{parentMessage}}</h2>
        <child-element></child-element>
    `,
    directives : [ChildComponent]
})
export class ParentComponent{
    constructor(){}
    parentMessage : string = "This message is from Parent";
}