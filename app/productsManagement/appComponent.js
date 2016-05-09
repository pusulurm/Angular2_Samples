System.register(['angular2/core', './products/productsListComponent', './products/productsService', 'angular2/http', 'angular2/router', 'rxjs/Rx', './home/welcome.component', './products/productDetailViewComponent'], function(exports_1, context_1) {
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
    var core_1, productsListComponent_1, productsService_1, http_1, router_1, welcome_component_1, productDetailViewComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productsListComponent_1_1) {
                productsListComponent_1 = productsListComponent_1_1;
            },
            function (productsService_1_1) {
                productsService_1 = productsService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (productDetailViewComponent_1_1) {
                productDetailViewComponent_1 = productDetailViewComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Sample Angular 2 APP";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/ProductsManagement/appComponent.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            productsService_1.ProductsServuce,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/products', name: 'Products', component: productsListComponent_1.ProductsListComponent },
                        { path: 'product/:id', name: 'ProductDetail', component: productDetailViewComponent_1.ProductDetailsView }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=appComponent.js.map