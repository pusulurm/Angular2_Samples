import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

@Component({
    templateUrl : 'app/productsManagement/products/productDetailViewComponent.html'
})
export class ProductDetailsView{
    pageTitle : string = "Product Details";
    imgUrl : string = "";
    constructor(private _routeParams : RouteParams, private _router : Router){
        let id = +this._routeParams.get('id');
        this.imgUrl = this._routeParams.get('imgUrl');
        this.pageTitle += `: ${id}`;
    }
    onBack() : void{
        this._router.navigate(['Products']);
    }    
}