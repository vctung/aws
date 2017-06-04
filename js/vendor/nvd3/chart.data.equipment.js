google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
 var data = google.visualization.arrayToDataTable([
    ['Date', 'Calories'],
    ['21/03/2017',  1000],
    ['22/03/2017',  1170],
    ['23/03/2017',  660],
    ['24/03/2017',  1030],
    ['25/03/2017',  1530],
    ['26/03/2017',  1000],
    ['27/03/2017',  1170],
    ['28/03/2017',  2660],
 ]);

 var options = {
    title: "",
    colors: ['#ce0832'],
    fontName : "Lato",
    fontSize : "12",
    hAxis: {
      title: "",
      titleTextStyle: {color: '#ce0832'}
    },
    vAxis: {minValue: 0},
    tooltip: {isHtml: true},
    chartArea:{left:60,top:40, right : 40, bottom : 40 ,width:"100%",height:"100%"},
    pointSize: 6,
    dataOpacity: 0.4,
    areaOpacity : 1,
    legend: {position: 'none'}
 };


 var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
 chart.draw(data, options);
}


// For resize borwser
$(window).resize(function(){
   drawChart();
});
