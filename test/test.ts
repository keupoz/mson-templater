import { isDecoderError } from "@mojotech/json-type-validation";
import { bold, cyan, gray, red, yellow } from "colors/safe";
import { readFileSync } from "fs";
import { sync as globSync } from "glob";
import { dirname, join } from "path";
import { model } from "../src/scripts/validation/model";

const MODELS_PATH = join(dirname(process.argv[1]), "models/**/*.json");

const MODELS = new Map(globSync(MODELS_PATH).map((path) => {
    return [path, readFileSync(path, { encoding: "utf-8" })];
}));

console.info(`Found ${MODELS.size} models`);

let totalCounter = 0;
let failedCounter = 0;

function increaseTotal() {
    totalCounter++;

    if (totalCounter == MODELS.size) {
        console.info(bold(cyan(`${totalCounter - failedCounter} of ${totalCounter} models passed validation. ${failedCounter} failed`)));
        process.exit(failedCounter ? 1 : 0);
    }
}

function failed() {
    failedCounter++;

    increaseTotal();
}

for (const entry of MODELS) {
    const [path, fileString] = entry;

    model.runPromise(JSON.parse(fileString))
        .then(() => increaseTotal())
        .catch((err) => {
            console.error(gray("========================================"));
            console.error(`${yellow(`"${path}"`)}:`);
            if (isDecoderError(err)) {
                const { kind, at, message, input } = err;
                console.error(red(`${kind} at ${at}: ${message}`));
                console.info(input);
            } else console.error(red(err));

            failed();
        });
}
