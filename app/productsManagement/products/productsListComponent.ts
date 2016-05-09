import {Component, OnInit} from 'angular2/core';
import {IProduct} from './IAmAProduct';
import {ProductsFilter} from './productFilterPipe';
import {StarComponent} from '../shared/starComponent';
import {ProductsServuce} from './productsService';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	templateUrl: 'app/productsManagement/products/productsListComponent.html',
    styleUrls : ['app/productsManagement/products/productsListComponent.css'],
    pipes : [ProductsFilter],
    directives : [StarComponent, ROUTER_DIRECTIVES]        
})
export class ProductsListComponent implements OnInit{
    constructor(private _productsService : ProductsServuce){
    }
	tableTitle : string = "Products List";
    imageWidth: number = 50;
    imageMargin : number = 2;
    showImage : Boolean = false;
    listFilter : string = '';
	products : IProduct[] ;
    errorMessage : string;
toggleImage():void{
    this.showImage = !this.showImage;  
};
ngOnInit(){
    this._productsService.getServices().subscribe(products => this.products = products, error => this.errorMessage = error );
    console.log('From OnInit');
};
starClicked(message : string) : void{
    console.log(message);
}
}