export interface Model {
    parent?: string;
    scale?: number;
    texture?: Texture;
    locals?: Locals;
    components: ParentComponent[];
}

export type Texture =
    | []
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | {
        u?: number,
        v?: number,
        w?: number,
        h?: number
    };

export type Operator = "+" | "-" | "*" | "/" | "^";
export type Variable = number | string;
export type Expression = Variable | [Expression, Operator, Expression];

export type Locals = Record<string, Expression>;

export interface Component {
    type?: string;
}

export type ParentComponent = Cuboid | Planar | Slot;
export type ChildComponent = Box | Plane | Cone | Quads;

export type Facing = "none" | "up" | "down" | "west" | "east" | "north" | "south";

export type Vector2<T> = [] | [T] | [T, T];
export type Vector3<T> = [] | [T] | [T, T] | [T, T, T];

export interface Cuboid extends Component {
    center?: Vector3<Variable>;
    offset?: Vector3<Variable>;
    rotate?: Vector3<Variable>;
    mirror?: Vector3<boolean>;
    visible?: boolean;
    texture?: Texture;
    name?: string;
    cubes?: ChildComponent[];
    children?: Component[];
}

export type CompactPlane =
    | [number, number, number, number, number]
    | [number, number, number, number, number, number, number];

export type CompactPlaneMaybeArray = CompactPlane | CompactPlane[];

export interface Planar extends Cuboid {
    stretch?: Vector3<number>;
    up?: CompactPlaneMaybeArray;
    down?: CompactPlaneMaybeArray;
    west?: CompactPlaneMaybeArray;
    east?: CompactPlaneMaybeArray;
    north?: CompactPlaneMaybeArray;
    south?: CompactPlaneMaybeArray;
}

export interface Slot extends Component {
    implementation: string;
    content: string | Model;
    name: string;
    texture?: Texture;
    locals?: Locals;
}

export interface Box extends Component {
    from?: Vector3<Variable>;
    size?: Vector3<Variable>;
    texture?: Texture;
    stretch?: Vector3<number>;
    mirror?: boolean;
}

export interface Plane extends Component {
    position?: Vector3<Variable>;
    size?: Vector2<Variable>;
    texture?: Texture;
    mirror?: Vector3<boolean>;
    stretch?: Vector3<number>;
    face: Facing;
}

export interface Cone extends Box {
    taper: number;
}

export type Vertex =
    | [number, number, number, number, number]
    | { x?: number, y?: number, z?: number, u?: number, v?: number };

export interface Face {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    vertices: number[];
}

export interface Quads extends Component {
    u: number;
    v: number;
    vertices: Vertex[];
    faces: Face[];
}
