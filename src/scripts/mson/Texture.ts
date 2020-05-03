export class Texture {
    private readonly u: number;
    private readonly v: number;
    private readonly w: number;
    private readonly h: number;

    constructor(texture: any) {
        let u: number;
        let v: number;
        let w: number;
        let h: number;

        if (Array.isArray(texture)) {
            [u, v, w, h] = texture;
        } else {
            ({ u, v, w, h } = texture);
        }

        this.u = u || 0;
        this.v = v || 0;
        this.w = w || 0;
        this.h = h || 0;
    }

    public getU() { return this.u; }
    public getV() { return this.v; }
    public getW() { return this.w; }
    public getH() { return this.h; }

    public serialize() {
        return {
            u: this.u,
            v: this.v,
            w: this.w,
            h: this.h
        };
    }
}
