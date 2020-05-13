import { array, number, object, optional } from "@mojotech/json-type-validation";
import { Model } from "../Mson";
import { parentComponent } from "./components";
import { identifier, locals, texture } from "./partials";

export const model = object().andThen((value) => {
    const components: any[] = [];

    for (const property in value) {
        switch (property) {
            case "parent":
            case "scale":
            case "texture":
            case "locals": break;
            default: {
                components.push(value[property]);
                delete value[property];
                break;
            }
        }
    }

    value.components = components;

    return object<Model>({
        parent: optional(identifier),
        scale: optional(number()),
        texture: optional(texture),
        locals: optional(locals),
        components: array(parentComponent("mson:compound"))
    });
});
