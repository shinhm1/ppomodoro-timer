/** @format */

document.addEventListener("DOMContentLoaded", (event) => {
    Promise.all([import("./ppomodoroTimer.js"), import("./restTimer.js"), import("./saveTime.js")]);
});
