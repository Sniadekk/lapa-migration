import {AdvertisementController} from "./controller/AdvertisementController";
import {ShelterController} from "./controller/ShelterController";

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
},
    {
        method: "get",
        route: "/shelters",
        controller: ShelterController,
        action: "all"
    },
    {
        method: "post",
        route: "/shelters",
        controller: ShelterController,
        action: "save"
    },
    {
        method: "get",
        route: "/shelters/:id",
        controller: ShelterController,
        action: "one"
    },
    {
        method: "delete",
        route: "/shelters/:id",
        controller: ShelterController,
        action: "remove"
    },
    {
        method: "post",
        route: "/shelters/:id/advertisements",
        controller: ShelterController,
        action: "addAdvertisement"
    },
    {
        method: "get",
        route: "/shelters/:id/advertisements",
        controller: ShelterController,
        action: "getAdvertisements"
    },
    {
        method: "get",
        route: "/advertisements/:status(missing|seeking|found)",
        controller: AdvertisementController,
        action: "getAdvertisementsByStatus"
    }

];