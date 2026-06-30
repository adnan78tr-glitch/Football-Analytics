export function log(...args) {
    console.log("[Assets]", ...args);
}

export function success(...args) {
    console.log("✅", ...args);
}

export function error(...args) {
    console.error("❌", ...args);
}