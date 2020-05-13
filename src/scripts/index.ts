import { isDecoderError } from "@mojotech/json-type-validation";
import { querySelector } from "./util";
import { model } from "./validation/model";

const $input = querySelector("#json-input-file", HTMLInputElement);
const $text = querySelector("#json-input-text", HTMLTextAreaElement);
const $error = querySelector("#json-parse-error", HTMLPreElement);
const $output = querySelector("#json-parse-output", HTMLPreElement);

function loadJSON(text: string): boolean {
    try {
        const rawJson = JSON.parse(text);
        const json = model.runWithException(rawJson);

        const formatted = JSON.stringify(json, null, 4);

        $output.innerText = formatted;
        $error.innerHTML = "";

        return true;
    } catch (err) {
        if (err instanceof Error) {
            $error.innerHTML = err.message;
        } else if (isDecoderError(err)) {
            const { kind, at, message } = err;
            console.error(err);
            $error.innerHTML = `${kind} at ${at}: ${message}`;
        } else if (typeof err == "string") {
            $error.innerHTML = err;
        }
    }

    return false;
}

$input.addEventListener("change", () => {
    if (!$input.files) throw new Error("No files property");

    const file = $input.files[0];

    if (!file) throw new Error("No file");

    const F = new FileReader();
    F.onload = () => {
        const result = F.result;

        if (typeof result !== "string") throw new TypeError("Loaded file is not string");

        loadJSON(result);
    };
    F.readAsText(file);
});

$text.addEventListener("input", function () {
    if (loadJSON(this.value)) {
        const selectionStart = this.selectionStart,
            selectionEnd = this.selectionEnd;

        const originalLength = this.value.length;

        this.value = JSON.stringify(JSON.parse(this.value), null, 4);

        const newLength = this.value.length;

        const deltaLength = newLength - originalLength;
        this.setSelectionRange(selectionStart + deltaLength, selectionEnd + deltaLength);
    }
});
