import { ICompactPlane, IFacing, IPlanar } from "../../Mson";
import { assertType } from "../assertType";
import { assertVector3 } from "../assertVector";
import { walkArray, walkObject } from "../walks";
import { assertCuboid } from "./assertCuboid";

const ALLOWED_FACINGS: Exclude<IFacing, "none">[] = ["up", "down", "west", "east", "north", "south"];

function assertFaceProperty(path: string, value: string): asserts value is IFacing {
    if (ALLOWED_FACINGS.indexOf(value as any) == -1) {
        throw new Error(`Face property "${path}" name must be one of ${ALLOWED_FACINGS.map((f) => `"${f}"`).join(", ")}. Got "${value}"`);
    }
}

function assertCompactPlane(path: string, value: any): asserts value is ICompactPlane {
    assertType(path, value, Array);
    // assertArrayLength(path,value,ArrayLengthAssertType.)

}

function assertCompactPlaneGeneral(path: string, value: any): asserts value is ICompactPlane | ICompactPlane[] {
    assertType(path, value, Array);

    if (Array.isArray(value[0])) {
        walkArray(path, value, (path, value) => {
            assertCompactPlane(path, value);
        });
    } else assertCompactPlane(path, value);
}

export function assertPlanar(path: string, value: any): asserts value is IPlanar {
    assertCuboid(path, value);

    walkObject(path, value, (path, value, property) => {
        switch (property) {
            case "stretch": assertVector3(path, value, Number); break;
            default: {
                assertFaceProperty(path, property);
                // assertCom
                break;
            }
        }
    });
}
