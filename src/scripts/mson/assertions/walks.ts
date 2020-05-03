export function walkArray(path: string, array: any[], callback: (path: string, item: any, index: number) => void): void {
    array.forEach((item, index) => {
        callback(`${path}[${index}]`, item, index);
    });
}

export function walkObject(path: string, object: Record<string, any>, callback: (path: string, item: any, property: string) => void) {
    Object.keys(object).forEach((property) => {
        callback(`${path}.${property}`, object[property], property);
    });
}
