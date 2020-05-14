import { constant, Decoder, dict, lazy, number, object, optional, string, tuple, union } from "@mojotech/json-type-validation";
import { Expression, Locals, Operator, Texture, Variable, Vector2, Vector3 } from "../Mson";
import { validateIdentifier } from "./identifier";

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
    constant<[]>([]),
    tuple([integer]),
    tuple([integer, integer]),
    tuple([integer, integer, integer]),
    tuple([integer, integer, integer, integer]),
    object({
        u: optional(integer),
        v: optional(integer),
        w: optional(integer),
        h: optional(integer)
    })
);

export const vector2: <T>(decoder: Decoder<T>) => Decoder<Vector2<T>> = <T>(decoder: Decoder<T>) => union(
    decoder.map((value) => [value, value]),
    constant<[]>([]),
    tuple([decoder]),
    tuple([decoder, decoder])
);

export const vector3: <T>(decoder: Decoder<T>) => Decoder<Vector3<T>> = <T>(decoder: Decoder<T>) => union(
    decoder.map((value) => [value, value, value]),
    constant<[]>([]),
    tuple([decoder]),
    tuple([decoder, decoder]),
    tuple([decoder, decoder, decoder])
);
