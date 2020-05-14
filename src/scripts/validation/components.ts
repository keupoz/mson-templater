import { array, boolean, constant, Decoder, DecoderObject, fail, intersection, lazy, number, object, optional, string, tuple, union } from "@mojotech/json-type-validation";
import { Box, ChildComponent, CompactPlane, CompactPlaneMaybeArray, Component, Cone, Cuboid, Face, Facing, ParentComponent, Planar, Plane, Quads, Slot, Vector3, Vertex } from "../Mson";
import { model } from "./model";
import { identifier, integer, locals, reference, texture, valueOr, variable, vector2, vector3 } from "./partials";

export const component: <T>(decoders: DecoderObject<T>, type?: string) => Decoder<Component & T> = (decoders, type) => intersection(
    object({
        type: !type ? identifier : optional(identifier).map((value) => {
            return value || type;
        })
    }),
    object(decoders)
);

const componentSelector = <T extends Component>(decoders: Record<string, () => Decoder<T>>) => {
    return (defaultComponent: string) => union(
        reference,
        object({
            type: optional(identifier)
        }).andThen((value): Decoder<T> => {
            const type = value.type || defaultComponent;

            if (type in decoders) {
                return decoders[type]();
            } else return fail(`expected a known component type, got "${type}"`);
        })
    );
};

export const parentComponent = componentSelector<Exclude<ParentComponent, string>>({
    "mson:compound": () => cuboid,
    "mson:planar": () => planar,
    "mson:slot": () => slot
});

export const childComponent = componentSelector<Exclude<ChildComponent, string>>({
    "mson:box": () => box,
    "mson:plane": () => plane,
    "mson:cone": () => cone,
    "mson:quads": () => quads,
});

export const cuboid: Decoder<Cuboid> = component({
    center: valueOr([0, 0, 0], vector3(0, variable)),
    offset: valueOr([0, 0, 0], vector3(0, variable)),
    rotate: valueOr([0, 0, 0], vector3(0, variable)),
    mirror: valueOr([false, false, false], vector3(false, boolean())),
    visible: valueOr(true, boolean()),
    texture: optional(texture),
    name: optional(string()),
    cubes: valueOr([], array(childComponent("mson:box"))),
    children: valueOr([], array(parentComponent("mson:compound")))
}, "mson:compound");

const compactPlane: Decoder<CompactPlane> = union(
    tuple([number(), number(), number(), integer, integer]),
    tuple([number(), number(), number(), integer, integer, variable, variable])
);

const compactPlaneMaybeArray: Decoder<CompactPlaneMaybeArray> = union(
    array(compactPlane),
    compactPlane
);

export const planar: Decoder<Planar> = intersection(
    cuboid,
    object({
        stretch: valueOr<Vector3<number>>([0, 0, 0], vector3(0, number())),
        up: optional(compactPlaneMaybeArray),
        down: optional(compactPlaneMaybeArray),
        west: optional(compactPlaneMaybeArray),
        east: optional(compactPlaneMaybeArray),
        north: optional(compactPlaneMaybeArray),
        south: optional(compactPlaneMaybeArray)
    })
);

export const slot: Decoder<Slot> = component({
    implementation: string(),
    content: union(
        identifier,
        lazy(() => model)
    ),
    name: string(),
    texture: valueOr([0, 0, 0, 0], texture),
    locals: valueOr({}, locals)
});

export const box: Decoder<Box> = component({
    from: valueOr([0, 0, 0], vector3(0, variable)),
    size: valueOr([0, 0, 0], vector3(0, variable)),
    texture: optional(texture),
    stretch: optional(vector3(0, number())),
    mirror: optional(boolean())
}, "mson:box");

export const facing: Decoder<Facing> = union(
    constant("none"),
    constant("up"),
    constant("down"),
    constant("west"),
    constant("east"),
    constant("north"),
    constant("south")
);

export const plane: Decoder<Plane> = component({
    position: valueOr([0, 0, 0], vector3(0, variable)),
    size: valueOr([0, 0], vector2(0, variable)),
    texture: optional(texture),
    mirror: optional(vector3(false, boolean())),
    stretch: optional(vector3(0, number())),
    face: facing
});

export const cone: Decoder<Cone> = intersection(
    box,
    object({
        taper: valueOr(0, number())
    })
);

export const vertex: Decoder<Vertex> = union(
    tuple([number(), number(), number(), integer, integer]),
    object({
        x: valueOr(0, number()),
        y: valueOr(0, number()),
        z: valueOr(0, number()),
        u: valueOr(0, integer),
        v: valueOr(0, integer)
    })
);

export const face: Decoder<Face> = object({
    x: valueOr(0, integer),
    y: valueOr(0, integer),
    w: valueOr(0, integer),
    h: valueOr(0, integer),
    vertices: array(integer),
});

export const quads: Decoder<Quads> = component({
    u: integer,
    v: integer,
    vertices: array(vertex),
    faces: array(face)
});
