/** @format */
import {autoStartRestTimer as restTimer} from "./restTimer.js";

let ppomodoroTimer = $("#ppomodoroTimer");
let isTimerRunning = false;
let ppomodoroTime = 5;
let savedTime = 0;
let second = ppomodoroTime;
let interval;

export function exportSavedTime() {
    return savedTime;
}

ppomodoroTimer.text(secToTimer(second));
ppomodoroTimer.val("stop");

export function resetPpomodoroTimer() {
    resetTimer();
    $("#startPpomodoroButton").prop("disabled", false);
    $("#resetPpomodoroButton").prop("disabled", false);
}

$("#startPpomodoroButton").click(function () {
    startAndStop();
});

$("#resetPpomodoroButton").click(function () {
    resetTimer();
});

// 타이머 시작 및 일시정지
function startAndStop() {
    if (!isTimerRunning && second > 0) {
        isTimerRunning = true;
        $("#startPpomodoroButton").text("중지하기");
        startTimer();
    } else {
        isTimerRunning = false;
        $("#startPpomodoroButton").text("시작하기");
        stopTimer();
    }
}

// 타이머 초기화
function resetTimer() {
    stopTimer();
    second = ppomodoroTime;
    $(ppomodoroTimer.text(secToTimer(second)));
}

// 타이머 시작
function startTimer() {
    interval = setInterval(() => {
        second--;
        savedTime++;
        ppomodoroTimer.text(secToTimer(second));
        if (second <= 0) {
            clearInterval(interval);
            $("#startPpomodoroButton").text("시작하기").prop("disabled", true);
            $("#resetPpomodoroButton").prop("disabled", true);
            restTimer();
        }
    }, 1000);
}

// 타이머 중지
function stopTimer() {
    interval = clearInterval(interval);
    isTimerRunning = false;
    $("#startPpomodoroButton").text("시작하기");
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
