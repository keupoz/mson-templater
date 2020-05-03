import { TypeConstructor } from "../../types";
import { IVariable, IVector2, IVector3 } from "../Mson";
import { assertVariable } from "./assertLocals";
import { ArrayLengthAssertType, assertArrayLength, assertNumber, assertType } from "./assertType";
import { walkArray } from "./walks";

function assertVariableGeneral(path: string, value: any): asserts value is IVariable {
    switch (typeof value) {
        case "string": assertVariable(path, value); break;
        default: assertNumber(path, value); break;
    }
}

function assertVector<T>(path: string, value: any, type: TypeConstructor<T> | null, maxLength: number) {
    assertType(path, value, Array);
    assertArrayLength(path, value, ArrayLengthAssertType.LESSOREQUAL, maxLength);

    walkArray(path, value, (path, item) => {
        if (type === null) {
            assertVariableGeneral(path, item);
        } else {
            assertType(path, type, item);
        }
    });
}

export function assertVector2<T>(path: string, value: any, type: TypeConstructor<T> | null): asserts value is IVector2<T> {
    assertVector(path, value, type, 2);
}

export function assertVector3<T>(path: string, value: any, type: TypeConstructor<T> | null): asserts value is IVector3<T> {
    assertVector(path, value, type, 3);
}
