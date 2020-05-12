import { array, boolean, constant, Decoder, DecoderObject, intersection, lazy, number, object, optional, string, tuple, union } from "@mojotech/json-type-validation";
import { Box, ChildComponent, CompactPlane, CompactPlaneMaybeArray, Component, Cone, Cuboid, Face, Facing, ParentComponent, Planar, Plane, Quads, Slot, Vertex } from "../Mson";
import { model } from "./model";
import { identifier, integer, locals, texture, variable, vector2, vector3 } from "./partials";

export const component: <T>(decoders: DecoderObject<T>) => Decoder<Component & T> = (decoders) => intersection(
    object({
        type: optional(identifier)
    }),
    object(decoders)
);

export const parentComponent = component({})
    .andThen((value): Decoder<ParentComponent> => {
        switch (value.type) {
            case "mson:planar": return planar;
            case "mson:slot": return slot;
            default: return cuboid;
        }
    });

export const childComponent = component({})
    .andThen((value): Decoder<ChildComponent> => {
        switch (value.type) {
            case "mson:plane": return plane;
            case "mson:cone": return cone;
            case "mson:quads": return quads;
            default: return box;
        }
    });

export const cuboid: Decoder<Cuboid> = component({
    center: optional(vector3(variable)),
    offset: optional(vector3(variable)),
    rotate: optional(vector3(variable)),
    mirror: optional(vector3(boolean())),
    visible: optional(boolean()),
    texture: optional(texture),
    name: optional(string()),
    cubes: optional(array(childComponent)),
    children: optional(array(parentComponent))
});

const compactPlane: Decoder<CompactPlane> = union(
    tuple([number(), number(), number(), number(), number()]),
    tuple([number(), number(), number(), number(), number(), number(), number()])
);

const compactPlaneMaybeArray: Decoder<CompactPlaneMaybeArray> = union(
    compactPlane,
    array(compactPlane)
);

export const planar: Decoder<Planar> = intersection(
    cuboid,
    object({
        stretch: optional(vector3(number())),
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
    texture: optional(texture),
    locals: optional(locals),
});

export const box: Decoder<Box> = component({
    from: optional(vector3(variable)),
    size: optional(vector3(variable)),
    texture: optional(texture),
    stretch: optional(vector3(number())),
    mirror: optional(boolean())
});

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
    position: optional(vector3(variable)),
    size: optional(vector2(variable)),
    texture: optional(texture),
    mirror: optional(vector3(boolean())),
    stretch: optional(vector3(integer)),
    face: facing
});

export const cone: Decoder<Cone> = intersection(
    box,
    object({
        taper: number()
    })
);

export const vertex: Decoder<Vertex> = union(
    tuple([number(), number(), number(), integer, integer]),
    object({
        x: optional(number()),
        y: optional(number()),
        z: optional(number()),
        u: optional(integer),
        v: optional(integer)
    })
);

export const face: Decoder<Face> = object({
    x: optional(integer),
    y: optional(integer),
    w: optional(integer),
    h: optional(integer),
    vertices: array(number()),
});

export const quads: Decoder<Quads> = component({
    u: integer,
    v: integer,
    vertices: array(vertex),
    faces: array(face)
});
