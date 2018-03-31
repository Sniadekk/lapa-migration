import {AdvertisementController} from "./controller/AdvertisementController";

export const Routes = [{
    method: "get",
    route: "/advertisements",
    controller: AdvertisementController,
    action: "all"
}, {
    method: "get",
    route: "/advertisements/:id",
    controller: AdvertisementController,
    action: "one"
}, {
    method: "post",
    route: "/advertisements",
    controller: AdvertisementController,
    action: "save"
}, {
    method: "delete",
    route: "/advertisements",
    controller: AdvertisementController,
    action: "remove"
}];