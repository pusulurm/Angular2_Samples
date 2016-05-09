import {Injectable} from 'angular2/core';
import {IProduct} from './IAmAProduct';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable'; 

@Injectable()
export class ProductsServuce{
    constructor(private _http: Http){
        
    }
    private _productUrl : string = "api/products/products.json";
    getServices() : Observable<IProduct[]>{
        return this._http.get(this._productUrl)
                                    .map((response : Response) => <IProduct[]>response.json())
                                    .catch(this.handleError);
    }
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }                                   
}