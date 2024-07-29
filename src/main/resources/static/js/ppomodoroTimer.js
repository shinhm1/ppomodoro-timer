/** @format */
import {autoStartRestTimer as restTimer} from "./restTimer.js";

let ppomodoroTimer = $("#ppomodoroTimer");
let isTimerRunning = false;
let ppomodoroTime = 50 * 60;
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
        $("#startPpomSvg").prop("src", "./pause-icon.svg");
        startTimer();
    } else {
        $("#startPpomSvg").prop("src", "./play-icon.svg");
        isTimerRunning = false;
        stopTimer();
    }
}

// 타이머 초기화
function resetTimer() {
    stopTimer();
    second = ppomodoroTime;
    $("#startPpomSvg").prop("src", "./play-icon.svg");
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
            $("#startPpomSvg").prop("src", "./play-icon.svg");
            // $("#ppomodoroContainer").addClass("isNotRunning");
            console.log(2);
            // $("#restContainer").removeClass("isNotRunning");
            console.log(3);
            restTimer();
        }
    }, 1000);
}

// 타이머 중지
function stopTimer() {
    interval = clearInterval(interval);
    isTimerRunning = false;
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
