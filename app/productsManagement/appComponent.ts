import {Component} from 'angular2/core';
import {ProductsListComponent} from './products/productsListComponent';
import {ProductsServuce} from './products/productsService';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailsView} from './products/productDetailViewComponent';
@Component({
	selector : 'my-app',
	templateUrl : 'app/ProductsManagement/appComponent.html',
	directives : [ROUTER_DIRECTIVES],
	providers : [
		ProductsServuce, 
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS]
})
@RouteConfig([
	{path : '/welcome', name : 'Welcome', component : WelcomeComponent, useAsDefault : true},
	{path : '/products', name : 'Products', component : ProductsListComponent},
	{path : 'product/:id', name:'ProductDetail', component : ProductDetailsView}
])
export class AppComponent{
	pageTitle : string = "Sample Angular 2 APP"
}