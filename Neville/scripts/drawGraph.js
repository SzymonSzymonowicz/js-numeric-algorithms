//get range(array) from start to end
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function drawGraph(X, Y) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var argRange = document.getElementById('argRange').value;

    var data ={
        datasets: [{
            label: 'P(x)',
            x: range(-argRange,argRange).reverse(),
            backgroundColor: 'rgb(255, 99, 132)',
            function: function(input) { return neville(X,Y,input) },
            data: [],
            y: [],
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointHoverBackgroundColor: 'rgb(255, 99, 132)',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
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
            scales: {
                yAxes: [{
                    id: 'first-y-axis',
                    type: 'linear',
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0.8)',
                        zeroLineWidth: 2
                    }
                }],
                xAxes: [{
                    id: 'first-x-axis',
                    type: 'linear',
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0.8)',
                        zeroLineWidth: 2
                    }
                }]
            },
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var pair = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return "P(" + pair.x + ") = " + pair.y;
                    },
                    title: function(tooltipItem, data) {},
                }
            }
        }
    });

    Chart.defaults.global.hover.intersect = false;
}
