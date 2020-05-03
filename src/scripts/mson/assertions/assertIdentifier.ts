import { assertType } from "./assertType";

function split(id: string, delimiter: string): [string, string] {
    const strings: [string, string] = ["minecraft", id];
    const i = id.indexOf(delimiter);

    if (i >= 0) {
        strings[1] = id.substring(i + 1, id.length);
        if (i >= 1) {
            strings[0] = id.substring(0, i);
        }
    }

    return strings;
}

function isNamespaceValid(namespace: string): boolean {
    return namespace
        .split("")
        .map((c) => c.charCodeAt(0))
        .every((c) => (c == 95 || c == 45 || (c >= 97 && c <= 122) || (c >= 48 && c <= 57) || c == 46));
}

function isPathValid(path: string): boolean {
    return path
        .split("")
        .map((c) => c.charCodeAt(0))
        .every((c) => (c == 95 || c == 45 || (c >= 97 && c <= 122) || (c >= 48 && c <= 57) || c == 47 || c == 46));
}

export function assertIdentifier(path: string, value: any): asserts value is string {
    assertType(path, String, value);

    const strings = split(value, ":");
    const expression = (isNamespaceValid(strings[0].length == 0 ? "minecraft" : strings[0]) && isPathValid(strings[1]));

    if (!expression) {
        throw new Error(`Identifier "${path}" must be valid. Got "${value}"`);
    }
}
