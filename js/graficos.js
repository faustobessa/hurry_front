                  
new Chart(document.getElementById("bars-haitam"), {
    type: 'horizontalBar',
    data: {
      labels: ["Inteira", "Meia"],
      datasets:[
        {
          backgroundColor: ["#67C5DA", "#67C5DA"],
          hoverBackgroundColor:["#67C5DA", "#67C5DA"],
          data: [55,50],
        },
        {
          backgroundColor: ["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          hoverBackgroundColor:["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          data: [100, 100],
        }
    ],
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
            display:false,
            ticks:{
            min:0,
            max:100,
            },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
        yAxes: [{
        ticks:{
        fontSize:15,
        fontStyle:'normal',
        fontColor:"#fff",
        fontFamily:"Roboto",
        },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
    }
    }
    
});
new Chart(document.getElementById("bars-rashid"), {
    type: 'horizontalBar',
    data: {
      labels: ["Inteira", "Meia"],
      datasets:[
        {
          backgroundColor: ["#6ADA67", "#67C5DA"],
          hoverBackgroundColor:["#6ADA67", "#67C5DA"],
          data: [100,20],
        },
        {
          backgroundColor: ["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          hoverBackgroundColor:["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          data: [100, 100],
        }
    ],
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
            display:false,
            ticks:{
            min:0,
            max:100,
            },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
        yAxes: [{
        ticks:{
        fontSize:15,
        fontStyle:'normal',
        fontColor:"#fff",
        fontFamily:"Roboto",
        },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
    }
    }
    
});
new Chart(document.getElementById("bars-projota"), {
    type: 'horizontalBar',
    data: {
      labels: ["Inteira", "Meia"],
      datasets:[
        {
          backgroundColor: ["#67C5DA", "#67C5DA"],
          hoverBackgroundColor:["#67C5DA", "#67C5DA"],
          data: [30,80],
        },
        {
          backgroundColor: ["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          hoverBackgroundColor:["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          data: [100, 100],
        }
    ],
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
            display:false,
            ticks:{
            min:0,
            max:100,
            },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
        yAxes: [{
        ticks:{
        fontSize:15,
        fontStyle:'normal',
        fontColor:"#fff",
        fontFamily:"Roboto",
        },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
    }
    }
    
});
new Chart(document.getElementById("bars-haitam-two"), {
    type: 'horizontalBar',
    data: {
      labels: ["Inteira", "Meia"],
      datasets:[
        {
          backgroundColor: ["#67C5DA", "#67C5DA"],
          hoverBackgroundColor:["#67C5DA", "#67C5DA"],
          data: [70,41],
        },
        {
          backgroundColor: ["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          hoverBackgroundColor:["rgb(103, 197, 218, .5)", "rgb(103, 197, 218, .5)"],
          data: [100, 100],
        }
    ],
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
            display:false,
            ticks:{
            min:0,
            max:100,
            },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
        yAxes: [{
        ticks:{
        fontSize:15,
        fontStyle:'normal',
        fontColor:"#fff",
        fontFamily:"Roboto",
        },
            gridLines: {
                display:false,
                color: "rgba(0, 0, 0, 0)",
            },
            stacked: true
        }],
    }
    }
    
});

var options = {
  type: 'pie',
  data: {
    labels: ['Pix', 'Cartão de Crédito'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: ['#6891FB', '#E0FB3D'],
      data: [20, 80],
      borderWidth: 0,
    }
  ]
  },
  options: {
  	legend: {
        display:false,
      }
  }
}
var entrada = document.getElementById('grafico-entradas').getContext('2d');
new Chart(entrada, options);

new Chart(document.getElementById("bars-faturamento"), {
  type: 'horizontalBar',
  data: {
    labels: ["Faturamento", "Investimento", "Lucro"],
    datasets:[
      {
        backgroundColor: ["#67C5DA", "#CD4A5A", "#CD4A5A"],
           hoverBackgroundColor:["#67C5DA", "#CD4A5A", "#CD4A5A"],
           data: [5500,5000, 2000],
      },
      {
        backgroundColor: ["rgb(103, 197, 218, .5)", "rgb(205, 74, 90, .5)", "rgb(205, 74, 90, .5)"],
           hoverBackgroundColor:["rgb(103, 197, 218, .5)", "rgb(205, 74, 90, .5)", "rgb(205, 74, 90, .5)"],
           data: [10000, 10000, 10000],
      }
  ],
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
    },
    scales: {
      xAxes: [{
          display:false,
          ticks:{
          min:0,
          max:10000,
          },
          gridLines: {
              display:false,
              color: "rgba(0, 0, 0, 0)",
          },
          stacked: true
      }],
      yAxes: [{
      ticks:{
      fontSize:15,
      fontStyle:'normal',
      fontColor:"#fff",
      fontFamily:"Roboto",
      },
          gridLines: {
              display:false,
              color: "rgba(0, 0, 0, 0)",
          },
          stacked: true
      }],
  }
  }
  
});

var optionsrec = {
  type: 'pie',
  data: {
    labels: ['Inteira', 'Bebidas', 'Meia', 'Comidas'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: ['#6891FB', '#E02727', '#E0FB3D', '#14FBD1' ],
      data: [32, 15, 38, 14],
      borderWidth: 0,
    }
  ]
  },
  options: {
  	legend: {
        display:false,
      }
  }
}
var receita = document.getElementById('grafico-receita').getContext('2d');
new Chart(receita, optionsrec);