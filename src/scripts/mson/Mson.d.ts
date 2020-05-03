type IRootModelSettings = {
    parent?: string;
    scale?: number;
    texture?: ITexture;
    locals?: ILocals;
};

export type IRootModel = Record<string, keyof IRootModelSettings> & IRootModelSettings;

export type ITexture =
    | []
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
    | {
        u: number,
        v: number,
        w: number,
        h: number
    };

export type IOperator = "+" | "-" | "*" | "/" | "^";
export type IVariable = number | string;
export type IExpression = IVariable | [IExpression, IOperator, IExpression];

export type ILocals = Record<string, IExpression>;

export type IParentComponent = ICuboid | IPlanar | ISlot;
export type IChildComponent = IBox | IPlane | ICone | IQuads;
export type IComponent = IParentComponent | IChildComponent;

export type IFacing = "none" | "up" | "down" | "west" | "east" | "north" | "south";

export type IVector2<T> = [] | [T] | [T, T];
export type IVector3<T> = [] | [T] | [T, T] | [T, T, T];

export type ICuboid = {
    type: "mson:compound";
    center: IVector3<IVariable>;
    offset: IVector3<IVariable>;
    rotate: IVector3<IVariable>;
    mirror: IVector3<boolean>;
    visible: boolean;
    texture: ITexture;
    name: string;
    cubes: IChildComponent[];
    children: IComponent[];
};

export type ICompactPlane =
    | [number, number, number, number, number]
    | [number, number, number, number, number, number, number];

export type IPlanar = Record<IFacing, ICompactPlane | ICompactPlane[]> & Omit<ICuboid, "type"> & {
    type: "mson:planar";
    stretch: IVector3<number>;
};

export type ISlot = {
    type: "mson:slot";
    implementation: string;
    content: string | IRootModel;
    name: string;
    texture: ITexture;
    locals: ILocals;
};

export type IBox = {
    type: "mson:box";
    from: IVector3<IVariable>;
    size: IVector3<IVariable>;
    texture: ITexture;
    stretch: IVector3<number>;
    mirror: boolean;
};

export type IPlane = {
    type: "mson:plane";
    position: IVector3<IVariable>;
    size: IVector2<IVariable>;
    texture: ITexture;
    mirror: IVector3<boolean>;
    stretch: IVector3<number>;
    face: IFacing;
};

export type ICone = Omit<IBox, "type"> & {
    type: "mson:cone";
    taper: number;
};

export type IVertex =
    | [number, number, number, number, number]
    | { x: number, y: number, z: number, u: number, v: number };

export type IFace = {
    x: number;
    y: number;
    w: number;
    h: number;
    vertices: number[];
};

export type IQuads = {
    type: "mson:quads";
    u: number;
    v: number;
    vertices: IVertex[];
    faces: IFace[];
};
