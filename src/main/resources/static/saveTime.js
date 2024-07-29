/** @format */

import {exportSavedTime, exportSavedTime as ppomodoroTimer} from "./ppomodoroTimer.js";

$("#saveButton").click(function () {
    var time = exportSavedTime();
    var title = $("#title").val();
    var savedDate = new Date().toISOString();

    // AJAX 요청을 통해 서버에 데이터를 저장
    $.ajax({
        url: "/saveTime",
        type: "POST",
        data: JSON.stringify({time: time, title: title, savedDate: savedDate}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert("시간이 성공적으로 저장되었습니다.");
            console.log("Response:", response);
        },
        error: function (xhr, status, error) {
            alert("시간 저장에 실패했습니다.");
            console.error("Error:", error);
        },
    });
});
