import { dict, number, object, optional } from "@mojotech/json-type-validation";
import { Model } from "../Mson";
import { parentComponent } from "./components";
import { identifier, locals, texture, valueOr } from "./partials";

export const model = object().andThen((value) => {
    const components: Record<string, any> = {};

    for (const property in value) {
        switch (property) {
            case "parent":
            case "scale":
            case "texture":
            case "locals": break;
            default: {
                components[property] = value[property];
                delete value[property];
                break;
            }
        }
    }

    value.components = components;

    return object<Model>({
        parent: optional(identifier),
        scale: valueOr(0, number()),
        texture: valueOr([0, 0, 0, 0], texture),
        locals: valueOr({}, locals),
        components: dict(parentComponent("mson:compound"))
    });
});
