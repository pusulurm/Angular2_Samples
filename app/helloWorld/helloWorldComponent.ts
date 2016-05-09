import {Component} from 'angular2/core';

@Component({
    selector : 'hello-world',
    template : `
        <h2>{{message}}</h2>
    `
})
export class HelloWorld{
    constructor(){}
    message : string = "Hello Angular ..!";
}