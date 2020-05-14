import { array, constant, Decoder, dict, lazy, number, object, optional, string, tuple, union } from "@mojotech/json-type-validation";
import { Expression, Locals, Operator, Texture, Variable, Vector2, Vector3 } from "../Mson";
import { validateIdentifier } from "./identifier";

export function valueOr<T>(defautlValue: T, decoder: Decoder<T>) {
    return optional(decoder)
        .map((value) => value || defautlValue);
}

export function maxArray<T>(maxLength: 2, defaultValue: T, decoder: Decoder<T>): Decoder<[T, T]>;
export function maxArray<T>(maxLength: 3, defaultValue: T, decoder: Decoder<T>): Decoder<[T, T, T]>;
export function maxArray<T>(maxLength: 4, defaultValue: T, decoder: Decoder<T>): Decoder<[T, T, T, T]>;
export function maxArray<T>(maxLength: number, defaultValue: T, decoder: Decoder<T>) {
    return array(decoder)
        .where((value) => value.length <= maxLength, `expected an array of length ${maxLength}`)
        .map((value) => {
            for (let i = 0; i < maxLength; i++) {
                if (!value[i]) value[i] = defaultValue;
            }

            return value;
        });
}

export function vector2<T>(defaultValue: T, decoder: Decoder<T>): Decoder<Vector2<T>> {
    return union(
        decoder.map((value) => [value, value]),
        maxArray(2, defaultValue, decoder)
    );
}

export function vector3<T>(defaultValue: T, decoder: Decoder<T>): Decoder<Vector3<T>> {
    return union(
        decoder.map((value) => [value, value, value]),
        maxArray(3, defaultValue, decoder)
    );
}

const operator: Decoder<Operator> = union(
    constant("+"),
    constant("-"),
    constant("*"),
    constant("/"),
    constant("^"),
    constant("%")
);

export const reference = string().where((value) => /^#\w+/.test(value), "expected a valid reference");

export const identifier = string().where((value) => validateIdentifier(value), "expected a valid identifier");

export const integer = number().where((value) => (value | 0) == value, "expected integer");

export const variable: Decoder<Variable> = union(
    reference,
    number()
);

export const expression: Decoder<Expression> = lazy(() => union(
    variable,
    tuple([expression, operator, expression])
));

export const locals: Decoder<Locals> = dict(expression);

export const texture: Decoder<Texture> = union(
    maxArray(4, 0, integer),
    object({
        u: valueOr(0, integer),
        v: valueOr(0, integer),
        w: valueOr(0, integer),
        h: valueOr(0, integer)
    })
);
