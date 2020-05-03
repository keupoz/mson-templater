import { assertRoot } from "./mson/assertions/assertRoot";
import { querySelector } from "./util";

const $input = querySelector("#json-input", HTMLInputElement);
const $error = querySelector("#json-parse-error", HTMLDivElement);
const $output = querySelector("#json-parse-output", HTMLTextAreaElement);

function loadJSON(text: string) {
    try {
        const json = JSON.parse(text);
        assertRoot("root", json);
        $output.value = JSON.stringify(json, null, 2);
        $error.innerHTML = "";
    } catch (err) {
        if (err instanceof Error) {
            $error.innerHTML = err.message;
        } else if (typeof err == "string") {
            $error.innerHTML = err;
        }
    }
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

$output.addEventListener("input", () => {
    loadJSON($output.value);
});
