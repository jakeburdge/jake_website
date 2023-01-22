Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Pineapple', 'Mango', 'Dragonfruit', 'Watermelon', 'Kiwi']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Jake',
        data: [9, 7, -7, 4, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});