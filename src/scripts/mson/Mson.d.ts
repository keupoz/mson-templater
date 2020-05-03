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
