$(document).ready(function(){
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-noir'
    });
    $("h1, h2, h3").css({
        "color":
        "Grey",
        "font-family":
        "xd"});




        Highcharts.chart('container', {
            chart: {
                type: 'variablepie'
            },
            title: {
                text: 'Countries compared by population density and total area, 2022.',
                align: 'left'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                    'Area (square km): <b>{point.y}</b><br/>' +
                    'Population density (people per square km): <b>{point.z}</b><br/>'
            },
            series: [{
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                name: 'countries',
                borderRadius: 5,
                data: [{
                    name: 'Spain',
                    y: 505992,
                    z: 92
                }, {
                    name: 'France',
                    y: 551695,
                    z: 119
                }, {
                    name: 'Poland',
                    y: 312679,
                    z: 121
                }, {
                    name: 'Czech Republic',
                    y: 78865,
                    z: 136
                }, {
                    name: 'Italy',
                    y: 301336,
                    z: 200
                }, {
                    name: 'Switzerland',
                    y: 41284,
                    z: 213
                }, {
                    name: 'Germany',
                    y: 357114,
                    z: 235
                }],
                colors: [
                    '#4caefe',
                    '#3dc3e8',
                    '#2dd9db',
                    '#1feeaf',
                    '#0ff3a0',
                    '#00e887',
                    '#23e274'
                ]
            }]
        });



        Highcharts.chart('container2', {

            title: {
                text: 'U.S Solar Employment Growth',
                align: 'left'
            },
        
            subtitle: {
                text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
                align: 'left'
            },
        
            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
        
            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2020'
                }
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
        
            series: [{
                name: 'Installation & Developers',
                data: [43934, 48656, 65165, 81827, 112143, 142383,
                    171533, 165174, 155157, 161454, 154610]
            }, {
                name: 'Manufacturing',
                data: [24916, 37941, 29742, 29851, 32490, 30282,
                    38121, 36885, 33726, 34243, 31050]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 30000, 16005, 19771, 20185, 24377,
                    32147, 30912, 29243, 29213, 25663]
            }, {
                name: 'Operations & Maintenance',
                data: [null, null, null, null, null, null, null,
                    null, 11164, 11218, 10077]
            }, {
                name: 'Other',
                data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                    17300, 13053, 11906, 10073]
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });





        (async () => {

            const topology = await fetch(
                'https://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json'
            ).then(response => response.json());
        
            // Prepare demo data. The data is joined to map using value of 'hc-key'
            // property by default. See API docs for 'joinBy' for more info on linking
            // data and map.
            const data = [
                ['mx-3622', 10], ['mx-bc', 11], ['mx-bs', 12], ['mx-so', 13],
                ['mx-cl', 14], ['mx-na', 15], ['mx-cm', 16], ['mx-qr', 17],
                ['mx-mx', 18], ['mx-mo', 19], ['mx-df', 20], ['mx-qt', 21],
                ['mx-tb', 22], ['mx-cs', 23], ['mx-nl', 24], ['mx-si', 25],
                ['mx-ch', 26], ['mx-ve', 27], ['mx-za', 28], ['mx-ag', 29],
                ['mx-ja', 30], ['mx-mi', 31], ['mx-oa', 32], ['mx-pu', 33],
                ['mx-gr', 34], ['mx-tl', 35], ['mx-tm', 36], ['mx-co', 37],
                ['mx-yu', 38], ['mx-dg', 39], ['mx-gj', 40], ['mx-sl', 41],
                ['mx-hg', 42]
            ];
        
            // Create the chart
            Highcharts.mapChart('container3', {
                chart: {
                    map: topology
                },
        
                title: {
                    text: 'Highcharts Maps basic demo'
                },
        
                subtitle: {
                    text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json">Mexico</a>'
                },
        
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
        
                colorAxis: {
                    min: 0
                },
        
                series: [{
                    data: data,
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }]
            });
        
        })();
        
});