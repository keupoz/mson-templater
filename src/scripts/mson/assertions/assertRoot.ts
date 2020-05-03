import { IRootModel } from "../Mson";
import { assertIdentifier } from "./assertIdentifier";
import { assertLocals } from "./assertLocals";
import { assertTexture } from "./assertTexture";
import { assertNumber, assertType } from "./assertType";
import { walkObject } from "./walks";

export function assertRoot(path: string, value: any): asserts value is IRootModel {
    assertType(path, value, Object);

    walkObject(path, value, (path, item, property) => {
        switch (property) {
            case "parent": assertIdentifier(path, item); break;
            case "scale": assertNumber(path, item); break;
            case "texture": assertTexture(path, item); break;
            case "locals": assertLocals(path, item); break;
        }
    });
}
