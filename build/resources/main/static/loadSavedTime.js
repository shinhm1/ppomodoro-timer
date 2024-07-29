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
                $("<td></td>").text(item.time),
                $("<td></td>").text(item.title),
                $("<td></td>").text(item.savedDate)
            );
            table.append(row);
        });
    },
    error: function (xhr, status, error) {
        console.error("Error fetching data:", error);
    },
});
