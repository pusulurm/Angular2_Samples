System.register(['angular2/core', './productFilterPipe', '../shared/starComponent', './productsService', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, productFilterPipe_1, starComponent_1, productsService_1, router_1;
    var ProductsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productFilterPipe_1_1) {
                productFilterPipe_1 = productFilterPipe_1_1;
            },
            function (starComponent_1_1) {
                starComponent_1 = starComponent_1_1;
            },
            function (productsService_1_1) {
                productsService_1 = productsService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductsListComponent = (function () {
                function ProductsListComponent(_productsService) {
                    this._productsService = _productsService;
                    this.tableTitle = "Products List";
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = '';
                }
                ProductsListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ;
                ProductsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productsService.getServices().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                    console.log('From OnInit');
                };
                ;
                ProductsListComponent.prototype.starClicked = function (message) {
                    console.log(message);
                };
                ProductsListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/productsManagement/products/productsListComponent.html',
                        styleUrls: ['app/productsManagement/products/productsListComponent.css'],
                        pipes: [productFilterPipe_1.ProductsFilter],
                        directives: [starComponent_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [productsService_1.ProductsServuce])
                ], ProductsListComponent);
                return ProductsListComponent;
            }());
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=productsListComponent.js.map