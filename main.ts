import * as angular from "angular";
import {GreeterController} from "./modules/greeter/controller";
import {app} from "./modules/app/init";

console.log("loading...");
app.controller("ctrl", GreeterController);
angular.bootstrap(document, ["app"], {
    strictDi: true
});
