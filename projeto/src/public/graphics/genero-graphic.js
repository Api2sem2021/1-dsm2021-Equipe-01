/* Config. global do gráfico que deixa a cor dos numeros do eixo y brancas (#ffff) */
Chart.defaults.global.defaultFontColor = "#ffff";

var ctx = document.getElementById('g-genero').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Feminino', 'Masculino'],
        datasets: [{
            label: 'Total',
            data: [100, 97],
            backgroundColor: 'rgba(154, 219, 249, 0.4)',
            borderColor: 'rgba(154, 219, 249)',
            borderWidth: 1,
        }]
    },
    options: {
        /* Desativa a legenda */
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            /* Retira os valores do eixo X da exibição */
            xAxes: [{
                display: false,
            }]
        },
    }
});