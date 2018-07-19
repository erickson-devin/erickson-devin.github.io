var myChart = document.getElementById('myChart').getContext('2d');
// API Request
var occData, property, occupancy, j = '';
var data = new XMLHttpRequest();
  data.open('GET', 'https://api.flex.io/v1/me/pipes/fwk1vxz4pycw/run?flexio_api_key=pfxrtbzfysdrtwtrzghv', true)
  data.onload = function() {
      occData = JSON.parse(this.responseText);
			pass(occData);

      console.log(occData);
    };
  data.send();

// Chart Building //

//Bellamy Occupancy //
function pass(ourData) {
var caliberOccupancy = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
						 	occData[1].property,
							occData[2].property,
							occData[3].property,
							occData[4].property,
							occData[5].property,
							occData[6].property,
							occData[7].property
						],
            padding:1,
    datasets:[{
      label:'Bellamy Occupancy',
      data:[
							occData[1].occupied,
							occData[2].occupied,
							occData[3].occupied,
							occData[4].occupied,
							occData[5].occupied,
							occData[6].occupied,
							occData[7].occupied
      			],
      //backgroundColor:'#25a1af'
      backgroundColor:[
        '#4073c6', //Bellamy Daholonega
				'#592a8a', //Bellamy Greenville
        '#e31b23', //Bellamy Louisville
        '#00aacd', //Bellamy Milledgeville
        '#006f71', //Bellamy Coastal
        '#46166b', //Bellamy Florence
        '#db9f11', //HawksNest Common
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#dbdbdb'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Bellamy Occupancy',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    scales:{
      yAxes:[{
        ticks:{
          max:1,
          min:0
        }
      }]
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

}

//Bellamy Pre-Lease //
setTimeout(function pass(ourData) {
var caliberOccupancy = new Chart(myChart, {
  type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
						 	occData[1].property,
							occData[2].property,
							occData[3].property,
							occData[4].property,
							occData[5].property,
							occData[6].property,
							occData[7].property
						],
            padding:1,
    datasets:[{
      label:'Pre-Leased',
      data:[
							occData[1].leased,
							occData[2].leased,
							occData[3].leased,
							occData[4].leased,
							occData[5].leased,
							occData[6].leased,
							occData[7].leased
      			],
      //backgroundColor:'#25a1af'
      backgroundColor:[
        '#4073c6', //Bellamy Daholonega
				'#592a8a', //Bellamy Greenville
        '#e31b23', //Bellamy Louisville
        '#00aacd', //Bellamy Milledgeville
        '#006f71', //Bellamy Coastal
        '#46166b', //Bellamy Florence
        '#db9f11', //HawksNest Common
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#dbdbdb'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Bellamy Fall Pre-Lease',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    scales:{
      yAxes:[{
        ticks:{
          max:1,
          min:0
        }
      }]
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

}, 30000);

//Bellamy Pre-Lease //
setTimeout(function pass(ourData) {
var caliberOccupancy = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
						 	occData[1].property,
							occData[2].property,
							occData[3].property,
							occData[4].property,
							occData[5].property,
							occData[6].property,
							occData[7].property
						],
            padding:1,
    datasets:[{
      label:'Vacant Units',
      data:[
							occData[1].vacant,
							occData[2].vacant,
							occData[3].vacant,
							occData[4].vacant,
							occData[5].vacant,
							occData[6].vacant,
							occData[7].vacant
      			],
      //backgroundColor:'#25a1af'
      backgroundColor:[
        '#4073c6', //Bellamy Daholonega
				'#592a8a', //Bellamy Greenville
        '#e31b23', //Bellamy Louisville
        '#00aacd', //Bellamy Milledgeville
        '#006f71', //Bellamy Coastal
        '#46166b', //Bellamy Florence
        '#db9f11', //HawksNest Common
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#dbdbdb'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Bellamy Current Vacant Units',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    scales:{
      yAxes:[{
        ticks:{

        }
      }]
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

}, 60000);

// SQ Occupancy //
setTimeout(function pass(ourData) {
var caliberOccupancy = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
							occData[0].property,
							occData[8].property,
							occData[9].property,
							occData[10].property,
							occData[11].property,
							occData[12].property,
							occData[13].property
						],
            padding:1,
    datasets:[{
      label:'Current Occupancy',
      data:[
        			occData[0].occupied,
							occData[8].occupied,
							occData[9].occupied,
							occData[10].occupied,
							occData[11].occupied,
							occData[12].occupied,
							occData[13].occupied
      			],
      //backgroundColor:'#25a1af'
      backgroundColor:[
        '#4a4ae0', //200 Edgewood
        '#cfb87c', //Lookout on Cragmor
        'rgb(0, 51, 161)', //SQ Campus Walk
        'rgb(219, 26, 33)', //SQ Carrollton
        '#ffcc00', //SQ Fulton Place
        '#ffc72c', //SQ Johnson City
        '#003366'  //SQ Spring Garden
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#dbdbdb'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Student Quarters Occupancy',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    scales:{
      yAxes:[{
        ticks:{
          max:1,
          min:0
        }
      }]
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

}, 90000);


// SQ Occupancy //
setTimeout(function pass(ourData) {
var caliberOccupancy = new Chart(myChart, {
  type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
							occData[0].property,
							occData[8].property,
							occData[9].property,
							occData[10].property,
							occData[11].property,
							occData[12].property,
							occData[13].property
						],
            padding:1,
    datasets:[{
      label:'Pre-Leased',
      data:[
        			occData[0].leased,
							occData[8].leased,
							occData[9].leased,
							occData[10].leased,
							occData[11].leased,
							occData[12].leased,
							occData[13].leased
      			],
      //backgroundColor:'#25a1af'
      backgroundColor:[
        '#4a4ae0', //200 Edgewood
        '#cfb87c', //Lookout on Cragmor
        'rgb(0, 51, 161)', //SQ Campus Walk
        'rgb(219, 26, 33)', //SQ Carrollton
        '#ffcc00', //SQ Fulton Place
        '#ffc72c', //SQ Johnson City
        '#003366'  //SQ Spring Garden
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#dbdbdb'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Student Quarters Fall Pre-Lease',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    scales:{
      yAxes:[{
        ticks:{
          max:1,
          min:0
        }
      }]
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

}, 120000);

// SQ Occupancy //
setTimeout(function pass(ourData) {
var caliberOccupancy = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
							occData[0].property,
							occData[8].property,
							occData[9].property,
							occData[10].property,
							occData[11].property,
							occData[12].property,
							occData[13].property
						],
            padding:1,
    datasets:[{
      label:'Vacant Units',
      data:[
        			occData[0].vacant,
							occData[8].vacant,
							occData[9].vacant,
							occData[10].vacant,
							occData[11].vacant,
							occData[12].vacant,
							occData[13].vacant
      			],
      //backgroundColor:'#25a1af'
      backgroundColor:[
        '#4a4ae0', //200 Edgewood
        '#cfb87c', //Lookout on Cragmor
        'rgb(0, 51, 161)', //SQ Campus Walk
        'rgb(219, 26, 33)', //SQ Carrollton
        '#ffcc00', //SQ Fulton Place
        '#ffc72c', //SQ Johnson City
        '#003366'  //SQ Spring Garden
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#dbdbdb'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Student Quarters Current Vacancy',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    scales:{
      yAxes:[{
        ticks:{

        }
      }]
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

}, 150000);


setTimeout(function(){
  location.reload();
}
, 180000);
