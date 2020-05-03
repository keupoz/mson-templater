import { ITexture } from "../Mson";
import { ArrayLengthAssertType, assertArrayLength, assertInteger, assertType } from "./assertType";
import { walkArray, walkObject } from "./walks";

export function assertTexture(path: string, value: any): asserts value is ITexture {
    if (Array.isArray(value)) {
        assertArrayLength(path, value, ArrayLengthAssertType.LESSOREQUAL, 4);

        walkArray(path, value, (path, item) => {
            assertInteger(path, item);
        });
    } else {
        assertType(path, value, Object);

        walkObject(path, value, (path, value, property) => {
            switch (property) {
                case "u":
                case "v":
                case "w":
                case "h": assertInteger(path, value); break;
            }
        });
    }
}
