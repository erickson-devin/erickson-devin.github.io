var occData, property, occupancy, j = '';
var data = new XMLHttpRequest();
  data.open('GET', 'https://api.flex.io/v1/me/pipes/fwk1vxz4pycw/run?flexio_api_key=pfxrtbzfysdrtwtrzghv', true)
  data.onload = function() {
    if(this.status == 200) {
      occData = JSON.parse(this.responseText);

      for(j in occData) {
        property =
        occData[j].property.occupied;
      }
    }
      console.log(occData[0].occupied);
  }

  data.send();
