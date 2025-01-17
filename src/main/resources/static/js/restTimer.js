/** @format */
import {resetPpomodoroTimer as ppomodoroTimer} from "./ppomodoroTimer.js";

let restTimer = $("#restTimer");
let isTimerRunning = false;
let restTime = 10 * 60;
let second = restTime;
let interval;

export function autoStartRestTimer() {
    startAndStop();
}

restTimer.text(secToTimer(second));
$("#startRestButton").prop("disabled", true);

$("#startRestButton").click(function () {
    startAndStop();
});

// 타이머 시작 및 일시정지
function startAndStop() {
    if (!isTimerRunning && second > 0) {
        $("#starRestSvg").prop("src", "./icon/pause-icon.svg");
        isTimerRunning = true;
        startTimer();
    } else {
        isTimerRunning = false;
        $("#startRestSvg").prop("src", "./icon/play-icon.svg");
        stopTimer();
    }
}

// 타이머 시작
function startTimer() {
    interval = setInterval(() => {
        second--;
        restTimer.text(secToTimer(second));
        if (second <= 0) {
            clearInterval(interval);
            $("#startRestSvg").prop("src", "./icon/play-icon.svg");
            resetTimer();
            ppomodoroTimer();
        }
    }, 1000);
}

// 타이머 중지
function stopTimer() {
    interval = clearInterval(interval);
}

function resetTimer() {
    isTimerRunning = false;
    second = restTime;
    restTimer.text(secToTimer(second));
    // $("#restTimer").addClass("isNotRunning");
    // $("#ppomodoroTimer").removeClass("isNotRunning");
}

// second를 mm:ss 형태로 변환
function secToTimer(seconds) {
    if (seconds < 61) {
        return "00:" + addZero(seconds);
    }

    var mins = Math.floor(seconds / 60);
    var secs = seconds - mins * 60;
    return addZero(mins) + ":" + addZero(secs);

    // 00 형태로 변환
    function addZero(num) {
        return (num < 10 ? "0" : "") + num;
    }
}
