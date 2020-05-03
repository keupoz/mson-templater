import { TypeConstructor } from "../../types";

export enum ArrayLengthAssertType {
    LESS = "less than",
    MORE = "more than",
    EQUAL = "exactly",
    LESSOREQUAL = "less or equal",
    MOREOREQUAL = "more or equal"
}

export function assertType<T>(path: string, typeConstructor: TypeConstructor<T>, value: any): asserts value is T {
    if (value.constructor !== typeConstructor) {
        throw new TypeError(`"${path}" must be type of ${typeConstructor.name}. Got ${value.constructor.name} "${value}"`);
    }
}

export function assertNumber(path: string, value: any): asserts value is number {
    assertType(path, Number, value);

    if (isNaN(value) || !isFinite(value)) {
        throw new TypeError(`"${path}" must be finite number. Got ${value}`);
    }
}

export function assertInteger(path: string, value: any): asserts value is number {
    assertNumber(path, value);

    if ((value | 0) !== value) {
        throw new TypeError(`"${path}" must be integer. Got ${value}`);
    }
}

export function assertArrayLength(path: string, array: any[], type: ArrayLengthAssertType, value: number) {
    let expression: boolean;

    switch (type) {
        case ArrayLengthAssertType.LESS: expression = array.length < value; break;
        case ArrayLengthAssertType.MORE: expression = array.length > value; break;
        case ArrayLengthAssertType.EQUAL: expression = array.length == value; break;
        case ArrayLengthAssertType.LESSOREQUAL: expression = array.length <= value; break;
        case ArrayLengthAssertType.MOREOREQUAL: expression = array.length >= value; break;
    }

    if (!expression) {
        throw new TypeError(`Array "${path}" length must be ${type}. Got ${array.length}`);
    }
}
