//get range(array) from start to end
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function drawGraph(a, b, c) {
    var ctx = document.getElementById('myChart').getContext('2d');

    var domain = range(a, b);
    domain.push(c);
    domain.sort(function(a, b) {
        return a - b;
    });

    var ann = [c];
    var ann_labels = ["Przybliżone rozwiązanie"];
    var annotations_array = ann.map(function(value, index) {
        return {
            type: 'line',
            id: 'vline' + index,
            mode: 'vertical',
            scaleID: 'first-x-axis',
            value: value,
            borderColor: 'blue',
            borderWidth: 2,
            label: {
                enabled: true,
                position: "top",
                yAdjust: 50,
                content: ann_labels[index]
            }
        }
    });

    var data ={
        datasets: [{
            label: 'f(x)',
            x: domain.reverse(),
            backgroundColor: 'rgb(255,0,0)',
            function: function(input) { return func(input) },
            data: [],
            y: [],
            borderColor: 'rgb(255,0,0)',
            fill: false,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointHoverBackgroundColor: 'rgb(255, 255, 255)',
            pointHoverBorderColor: 'rgb(0, 0, 0)',
            xAxisID: 'first-x-axis',
            yAxisID: 'first-y-axis'
        }]
    };

    Chart.pluginService.register({
        beforeInit: function(chart) {
            var data = chart.config.data;

            //cleaning
            for(var c = 0; c < data.datasets.length; c++)
                data.datasets[c].data = [];

            for (var i = 0; i < data.datasets.length; i++) {
                for (var j = 0; j < data.datasets[i].x.length; j++) {
                    var func = data.datasets[i].function,
                        x = data.datasets[i].x[j],
                        y = func(x);
                    data.datasets[i].data.push({x: x, y: y});
                }
            }
        }
    });

    if(window.chart){
        window.chart.destroy()
    }

    window.chart = new Chart(ctx, {
        type: 'line',
        data: data,

        options: {
            annotation: {
                drawTime: 'beforeDatasetsDraw',
                annotations: annotations_array,
            },
            scales: {
                yAxes: [{
                    id: 'first-y-axis',
                    type: 'linear',
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0.8)',
                        zeroLineWidth: 2
                    },
                    ticks : {
                        beginAtZero : true
                    }
                }],
                xAxes: [{
                    id: 'first-x-axis',
                    type: 'linear',
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0.8)',
                        zeroLineWidth: 2
                    },
                    ticks : {
                        beginAtZero : true
                    }
                }]
            },
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var pair = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return "f(" + pair.x + ") = " + pair.y;
                    },
                    title: function(tooltipItem, data) {},
                }
            }
        }
    });

    Chart.defaults.global.hover.intersect = false;
}
