$(function () {
    var chartsArr = [];

    $('button' ).on( "click",  function(){

        var element = $('input').val();

        $( "body" ).append("<div id="+element+">");



        console.log(element);

        var options = {
            colors: ['#8465a3', '#8465ac','#9d84bd','#a993c5','#b5a3cd','#c2b2d6','#cec1de','#dad1e6','#e6e0ee','#f3f0f7', 'white'],
            chart: {
                renderTo: element,
                plotBackgroundColor: 'white',
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: element,
                align: 'center',
                y: 130
            },
            tooltip: {
                pointFormat: '{point.percentage:.1f}%'
            },
            subtitle: {
                align: 'center',
                y: 150
            },
            plotOptions: {
                pie: {
                    size: '100%',
                    showInLegend: true,
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '25%'],
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            legend: {
                floating: true,
                itemStyle: {
                    color: 'black', fontSize: '10px'
                },
                labelFormat: '{name} {y}%',
                symbolRadius: 0,
                layout: 'vertical',
                verticalAlign: 'top',
                y: 160

            },
            series: [{
                type: 'pie',
                innerSize: '55%'
            }]

        };


        $.ajax({
            url:"js/view.json",
            dataType: 'json',
            success:function(data){

                var uniueUsers = data['demographic-campaign-info'][0].VIEW.uniqueUsers;

                var values = data['demographic-campaign-info'][0].VIEW[element].values;

                var total = data['demographic-campaign-info'][0].VIEW[element].total;


                var objChart = {
                    chart: [] ,
                    distribution: ''
                };

                values.forEach(function(item, i, values) {

                    var itemProsent = item.amount/total*100;

                    var dataPoint = total/uniueUsers*100;

                    objChart.chart[i] = [item.key, ( Math.round(itemProsent * 100) / 100)];
                    objChart.distribution = ( Math.round(dataPoint  * 100) / 100);


                });

                options.series[0].data = objChart.chart;
                options.subtitle.text =  objChart.distribution + '% Data Points';
                var chart = new Highcharts.Chart(options);

            }
        });

        chartsArr.push(Highcharts);

        console.log(chartsArr);



    });


});
