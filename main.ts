import * as angular from "angular";
import {MessengerController} from "./modules/messenger/controller";
import {app} from "./modules/app/init";

console.log("loading...");
app.controller("ctrl", MessengerController);
