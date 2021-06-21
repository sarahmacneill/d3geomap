var data = [{
    type: 'scattergeo',
    mode: 'markers+text',
    text: [
        'Austin', 'Glasgow'
    ],
    lon: [
        -97.7333, -4.251433
    ],
    lat: [
        30.2666, 55.860916
    ],
    marker: {
        size: 7,
        color: [
            '#bebada', '#FFC0CB'
        ],
        line: {
            width: 0
        }
    },
    name: 'Map',
    textposition: [
        'top right', 'top left', 'top center', 'bottom right', 'top right',
        'top left', 'bottom right', 'bottom left', 'top right', 'top right'
    ],
}];

var layout = {
    title: 'Map',
    font: {
        family: 'sans',
        size: 6
    },
    titlefont: {
        size: 16
    },
    geo: {
        scope: 'world',
        resolution: 50,
        showland: true,
        coastlinewidth: 0.5,
        countrywidth: 0.5,
        coastlinecolor: 'rgb(212,212,212)',
        landcolor: 'rgb(212,212,212)',
        subunitcolor: 'rgb(255,255,255)',
        countrycolor: 'rgb(255,255,255)',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)',
        showsubunits: true,
        showcountries: true,
        resolution: 50,
        longaxis: {
            range: [ -140.0, -55.0 ]
          },
        lataxis: {
            range: [ -60.0, 90.0 ]
          },
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    let myDiv = document.getElementById('myDiv');
    Plotly.newPlot(myDiv, data, layout);
});
