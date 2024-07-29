/** @format */

$.ajax({
    url: "/getTime",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
        let table = $("#timerTable");
        $.each(data, function (index, item) {
            var row = $("<tr></tr>").append(
                $("<td></td>").text(secToTimer(item.time)),
                $("<td></td>").text(item.title),
                $("<td></td>").text(convertToDateFormat(item.savedDate))
            );
            table.append(row);
        });
    },
    error: function (xhr, status, error) {
        console.error("Error fetching data:", error);
    },
});

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

function convertToDateFormat(datetimeString) {
    // Date 객체를 생성
    var date = new Date(datetimeString);

    // 년, 월, 일 추출
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1
    var day = ("0" + date.getDate()).slice(-2);

    // 원하는 형식으로 반환
    return year + "." + month + "." + day;
}
