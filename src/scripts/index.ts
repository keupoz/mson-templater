import { isDecoderError } from "@mojotech/json-type-validation";
import parserBabel from "prettier/parser-babel";
import { format, formatWithCursor } from "prettier/standalone";
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

        const formatted = format(JSON.stringify(json, null, 2), {
            parser: "json",
            plugins: [parserBabel],
            useTabs: false,
            tabWidth: 4,
            endOfLine: "lf"
        });

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

$text.addEventListener("input", () => {
    if (loadJSON($text.value)) {
        const { formatted, cursorOffset } = formatWithCursor($text.value, {
            cursorOffset: $text.selectionStart,
            parser: "json",
            plugins: [parserBabel],
            useTabs: false,
            tabWidth: 4,
            endOfLine: "lf"
        });

        $text.value = formatted;
        $text.setSelectionRange(cursorOffset, cursorOffset);
    }
});
