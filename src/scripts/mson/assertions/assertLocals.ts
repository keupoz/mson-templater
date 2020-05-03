import { IExpression, ILocals, IOperator } from "../Mson";
import { ArrayLengthAssertType, assertArrayLength, assertNumber, assertType } from "./assertType";
import { walkObject } from "./walks";

const ALLOWED_OPERATORS: IOperator[] = ["+", "-", "*", "/", "/"];

function assertVariable(path: string, value: string) {
    if (!value.startsWith("#")) {
        throw new Error(`Variable "${path}" must start with #. Got "${value}"`);
    }
}

function assertOperator(path: string, value: any): asserts value is IOperator {
    assertType(path, String, value);

    if (ALLOWED_OPERATORS.indexOf(value as any) !== -1) {
        throw new Error(`Operator "${path}" must be one of ${ALLOWED_OPERATORS.map((o) => `"${o}"`).join(", ")}. Got "${value}"`);
    }
}

function assertExpression(path: string, value: any): asserts value is IExpression {
    switch (typeof value) {
        case "number": assertNumber(path, value); break;
        case "string": assertVariable(path, value); break;
        default: {
            if (!Array.isArray(value)) {
                throw new Error(`Expression "${path}" must be number, string or array. Got ${value.constructor.name} "${value}"`);
            }

            assertArrayLength(path, value, ArrayLengthAssertType.EQUAL, 3);

            assertExpression(`${path}[0]`, value[0]);
            assertOperator(`${path}[1]`, value[1]);
            assertExpression(`${path}[2]`, value[2]);

            break;
        }
    }
}

export function assertLocals(path: string, value: any): asserts value is ILocals {
    assertType(path, Object, value);

    walkObject(path, value, (path, item) => {
        assertExpression(path, item);
    });
}
