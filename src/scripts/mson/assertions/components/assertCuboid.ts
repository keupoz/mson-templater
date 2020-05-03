import { ICuboid } from "../../Mson";
import { assertTexture } from "../assertTexture";
import { assertType } from "../assertType";
import { assertVector3 } from "../assertVector";
import { walkObject } from "../walks";
import { assertChildComponent, assertComponent } from "./assertComponents";

export function assertCuboid(path: string, value: Object): asserts value is ICuboid {
    walkObject(path, value, (path, value, property) => {
        switch (property) {
            case "center":
            case "offset":
            case "rotate": assertVector3(path, value, null); break;
            case "mirror": assertVector3(path, value, Boolean); break;
            case "visible": assertType(path, value, Boolean); break;
            case "texture": assertTexture(path, value); break;
            case "name": assertType(path, value, String); break;
            case "cubes": assertChildComponent(path, value); break;
            case "children": assertComponent(path, value); break;
        }
    });
}
