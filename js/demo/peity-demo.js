$(function() {
    $("span.pie").peity("pie", {
        fill: ['#007ed5', '#d7d7d7', '#ffffff']
    })

    $(".line").peity("line",{
        fill: '#007ed5',
        stroke:'#007ed5',
    })

    $(".bar").peity("bar", {
        fill: ["#007ed5", "#d7d7d7"]
    })

    $(".bar_dashboard").peity("bar", {
        fill: ["#007ed5", "#d7d7d7"],
        width:100
    })

    var updatingChart = $(".updating-chart").peity("line", { fill: '#007ed5',stroke:'#007ed5', width: 64 })

    setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000);

});
