var myChart = document.getElementById('myChart').getContext('2d');
// API Request
var occData, property, occupancy, j = '';
var data = new XMLHttpRequest();
  data.open('GET', 'https://api.flex.io/v1/me/pipes/fwk1vxz4pycw/run?flexio_api_key=pfxrtbzfysdrtwtrzghv', true)
  data.onload = function() {
      occData = JSON.parse(this.responseText);
			pass(occData);
    };
  data.send();


// Chart Building

function pass(ourData) {
var massPopChart = new Chart(myChart, {



  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
							occData[0].property,
						 	occData[1].property,
							occData[2].property,
							occData[3].property,
							occData[4].property,
							occData[5].property,
							occData[6].property,
							occData[7].property,
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
							occData[1].occupied,
							occData[2].occupied,
							occData[3].occupied,
							occData[4].occupied,
							occData[5].occupied,
							occData[6].occupied,
							occData[7].occupied,
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
        '#4073c6', //Bellamy Daholonega
				'#592a8a', //Bellamy Greenville
        '#e31b23', //Bellamy Louisville
        '#00aacd', //Bellamy Milledgeville
        '#006f71', //Bellamy Coastal
        '#46166b', //Bellamy Florence
        '#db9f11', //HawksNest Common
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
      text:'Current Occupancy',
      fontSize:25
    },
    legend:{
      display:true,
      postion:'bottom',
      labels:{
        fontColor:'#000'
      }
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
