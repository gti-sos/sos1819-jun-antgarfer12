var app = angular.module("app");
console.log("A");
app.controller("IntegrationsCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("IntegrationsCtrl initicialized!");
console.log("B");

    var myApi = "https://sos1819-jun-antgarfer12.herokuapp.com/api/v1/motogp";
    var api1 = "/proxy1";
    var api2 = "/proxy2";
    var api3 = "/proxy3";
    var api4 = "/proxy4";
    var api5 = "/proxy5";
    var api6 = "/proxy6";
    var apiExterna1 = "proxyExterno";
    var apiExterna2 = "proxyExterno2";
    var apiExterna3 = "/proxyExterno3";

    var datoAux = [];
    var datoAux2 = [];
    var datoAux3 = [];

    //-------------------API grupo 6 - Jesus Ezcurra---------------------------------
    $http.get(api1).then(function(responseApi1) {
console.log("C");


        $http.get(myApi).then(function(response) {
console.log("D");

            var i;
            for (i = 0; i < responseApi1.data.length; i++) {
                datoAux2.push(responseApi1.data[i].points);
                datoAux3.push(responseApi1.data[i].season);
            }
            for (i = 0; i < response.data.length; i++) {
                datoAux.push(response.data[i].circuit);
            }
console.log("E");

            Highcharts.chart('container', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: "Integration: Uefa Club Rankings"
                },
                xAxis: {
                    categories: [
                        [datoAux[0], datoAux3[0]],
                        [datoAux[1], datoAux3[1]],
                        [datoAux[2], datoAux3[2]],
                        [datoAux[3], datoAux3[3]],
                        [datoAux[4], datoAux3[4]]
                    ],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Points',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' points'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Total Points',
                    data: [datoAux2[0], datoAux2[1], datoAux2[2], datoAux2[3], datoAux2[4]]
                }]
            });
console.log("F");

        });
console.log("G");

    });
console.log("H");



    //2-------------------API grupo 8 - M Dolores Lopez---------------------------------

    var dato = [];
    var dato1 = [];

    $http.get(api2).then(function(response) {
        var i;
        for (i = 0; i < response.data.length; i++) {
            dato.push(response.data[i].country);
            dato1.push(response.data[i].touristDeparture)
        }
        google.charts.load('current', {
            'packages': ['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'motogp'],
                [dato[0], dato1[0]],
                [dato[1], dato1[1]],
                [dato[2], dato1[2]],
                [dato[3], dato1[3]]
            ]);

            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('regions-div'));

            chart.draw(data, options);
        }
    });

    //3-------------------API grupo 2 - Pablo Garcia---------------------------------


    $http.get(api3).then(function(response2) {
        $http.get(myApi).then(function(response) {
            anychart.onDocumentReady(function() {
                // create pie chart with passed data
                var data = anychart.data.set([
                    [response2.data[0].company, response.data[0].crash],
                    [response2.data[1].company, response.data[1].crash],
                    [response2.data[2].company, response.data[2].crash],
                    [response2.data[3].company, response.data[3].crash],
                    [response2.data[4].company, response.data[4].crash]
                ]);

                var wealth = data.mapAs({ 'x': 0, 'value': 1 });

                var chart = anychart.pie(wealth);
                chart.labels()
                    .hAlign('center')
                    .position('outside')
                    .format('{%Value} points');

                // set chart title text settings
                chart.title('Integration: Companies Stats');

                // set legend title text settings
                chart.legend()
                    // set legend position and items layout
                    .position('center-bottom')
                    .itemsLayout('horizontal')
                    .align('center');

                // set container id for the chart
                chart.container('container_anychart');
                // initiate chart drawing
                chart.draw();
            });
        });
    });


    //4-------------------API grupo 4 - Juan Pedro---------------------------------

    $http.get(api4).then(function(response1) {
        $http.get(myApi).then(function(response) {
            anychart.onDocumentReady(function() {
                // create pie chart with passed data
                var chart = anychart.pie([
                    [response.data[0].circuit, response1.data[0].countryConsumition],
                    [response.data[1].circuit, response1.data[1].countryConsumition],
                    [response.data[2].circuit, response1.data[2].countryConsumition],
                    [response.data[3].circuit, response1.data[3].countryConsumition]
                ]);

                // set chart title text settings
                chart.title('Integration: Beer consumed Stats')
                    //set chart radius
                    .radius('43%')
                    // create empty area in pie chart
                    .innerRadius('30%');

                // set container id for the chart
                chart.container('container_anychart2');
                // initiate chart drawing
                chart.draw();
            });
        });
    });

    //5-------------------INTEGRACION con API grupo 5  ---------------------------------

    //morris.js
    $http.get(myApi).then(function(response) {
        $http.get(api5).then(function(response2) {
            Morris.Donut({
                element: 'example',
                data: [
                    { label: response.data[0].year, value: response2.data[0].co2_stats },
                    { label: response.data[1].year, value: response2.data[1].co2_stats },
                    { label: response.data[2].year, value: response2.data[2].co2_stats },
                    { label: response.data[3].year, value: response2.data[3].co2_stats },
                    { label: response.data[4].year, value: response2.data[4].co2_stats }
                ]
            });

        });
    });


    //6-------------------INTEGRACION con API grupo 11 - Antonio Jesus ---------------------------------

    $http.get(api6).then(function(response) {
        $http.get(myApi).then(function(response2) {


            am4core.ready(function() {

                // Themes begin
                am4core.useTheme(am4themes_kelly);
                am4core.useTheme(am4themes_animated);
                // Themes end

                // Create chart instance
                var chart = am4core.create("container_a", am4charts.PieChart);

                // Add data
                chart.data = [
                    { "cat": response.data[0].educationExpense, "val": response2.data[0].crash },
                    { "cat": response.data[1].educationExpense, "val": response2.data[1].crash },
                    { "cat": response.data[2].educationExpense, "val": response2.data[2].crash },
                    { "cat": response.data[3].educationExpense, "val": response2.data[3].crash },
                    { "cat": response.data[4].educationExpense, "val": response2.data[4].crash }
                ];

                // Add and configure Series
                chart.innerRadius = am4core.percent(50);

                // Add and configure Series
                var pieSeries = chart.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "val";
                pieSeries.dataFields.category = "cat";
                pieSeries.slices.template.stroke = am4core.color("#fff");
                pieSeries.slices.template.strokeWidth = 2;
                pieSeries.slices.template.strokeOpacity = 1;

                // This creates initial animation
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;

            }); // end am4core.ready()
        });
    });


    //7-INTEGRACION CON API EXTERNA 

    $http.get(apiExterna1).then(function(response) {
        $http.get(myApi).then(function(response2) {


            am4core.ready(function() {

                // Themes begin
                am4core.useTheme(am4themes_animated);
                // Themes end

                // Create chart instance
                var chart = am4core.create("externa1", am4charts.PieChart);

                // Add data
                chart.data = [
                    { "eduexpen": response.data[0].date, "deads": response2.data[0].crash },
                    { "eduexpen": response.data[1].date, "deads": response2.data[1].crash },
                    { "eduexpen": response.data[2].date, "deads": response2.data[2].crash },
                    { "eduexpen": response.data[3].date, "deads": response2.data[3].crash },
                    { "eduexpen": response.data[4].date, "deads": response2.data[4].crash }
                ];

                // Add and configure Series
                var pieSeries = chart.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "deads";
                pieSeries.dataFields.category = "eduexpen";
                pieSeries.slices.template.stroke = am4core.color("#fff");
                pieSeries.slices.template.strokeWidth = 2;
                pieSeries.slices.template.strokeOpacity = 1;

                // This creates initial animation
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;

            }); // end am4core.ready()
        });
    });

    //8-INTEGRACION CON API EXTERNA 2

    var incomes = [];
    var labels = [];

    $http.get(apiExterna2).then(function(response) {
        $http.get(myApi).then(function(response1) {

            for (var i = 0; i < response.data.length; i++) {
                incomes.push(response.data[i].name);
            }
            for (var i = 0; i < response1.data.length; i++) {
                labels.push(response1.data[i].crash);
            }


            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [response.data[0].name, response.data[1].name, response.data[2].name, response.data[3].name, response.data[4].name, response.data[5].name],
                    datasets: [{
                        label: '# crash of motogp',
                        data: [labels[0], labels[1], labels[2],
                            [3], labels[4], labels[5]
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        });
    });

/*
    //9-INTEGRACION CON API EXTERNA 2
    var income = [];
    var label = [];

    $http.get(apiExterna3).then(function(response) {
        $http.get(myApi).then(function(response1) {

            for (var i = 0; i < response.data.length; i++) {
                income.push(response.data[i].crash);
            }
            for (var i = 0; i < response1.data.length; i++) {
                label.push(response1.data[i].circuit);
            }

            var ctx = document.getElementById('externa3').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [response1.data[0].circuit, response1.data[1].circuit, response1.data[2].circuit, response1.data[3].circuit, response1.data[4].circuit, response1.data[5].circuit],
                    datasets: [{
                        label: '# Income',
                        data: [income[0], income[1], income[2], income[3], income[4], income[5]],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        });
    });*/


}]);
console.log("I");