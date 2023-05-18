// Pobierz dane z serwera

function get_data(){
fetch("get_data_from_db.php")
    .then(response => response.json())
    .then(data => {
      drawChart(data);
    })
    .catch(error => {
      console.error(error);
    });
}

let massPopChart=null;
let massPopChart1=null;
let massPopChart2=null;
let massPopChart3=null;

function drawChart(data) {

 
  
    // Wykres temperatury
    let temperature = document.getElementById('temperature').getContext('2d');
    if (Chart.getChart("temperature")){

      Chart.getChart("temperature").destroy();

    }
    let massPopChart = new Chart(temperature, {
      type: 'line',
      data: {
        labels: data.time_stamp,
        datasets: [{
          label: 'Temperature',
          data: data.temperature,
          backgroundColor: 'green',
          borderColor: 'green'
        }]
      },
      options: {
        scales: {
          y: {
            min: -30,
            max: 40,
            ticks: {
              callback: function(value, index, values) {
                return value + ' C';
              }
            }
          }
        }
      }
    });

    // Wykres wilgotności
    let humidity = document.getElementById('humidity').getContext('2d');
    if (Chart.getChart("humidity")){

      Chart.getChart("humidity").destroy();

    }
    let massPopChart1 = new Chart(humidity, {
      type: 'line',
      data: {
        labels: data.time_stamp,
        datasets: [{
          label: 'Humidity',
          data: data.humidity,
          backgroundColor: 'orange',
          borderColor: 'orange'
        }]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              callback: function(value, index, values) {
                return value + ' %';
              }
            }
          }
        }
      }
    });

    // Wykres ciśnienia
    let pressure = document.getElementById('pressure').getContext('2d');
    if (Chart.getChart("pressure")){

      Chart.getChart("pressure").destroy();

    }
    let massPopChart2 = new Chart(pressure, {
      type: 'line',
      data: {
        labels: data.time_stamp,
        datasets: [{
          label: 'Pressure',
          data: data.pressure,
          backgroundColor: 'blue',
          borderColor: 'blue'
        }]
      },
      options: {
        scales: {
          y: {
            min: 500,
            max: 1300,
            ticks: {
              callback: function(value, index, values) {
                return value + ' hPa';
              }
            }
          }
        }
      }
    });

    let air_quality = document.getElementById('air_quality').getContext('2d');
    if (Chart.getChart("air_quality")){

      Chart.getChart("air_quality").destroy();

    }
    let massPopChart3 = new Chart(air_quality, {
      type: 'line',
      data: {
        labels: data.time_stamp,
        datasets: [{
          label: 'Air Quality',
          data: data.air_quality,
          backgroundColor: 'black',
          borderColor: 'black'
        }]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              callback: function(value, index, values) {
                return value + ' %';
              }
            }
          }
        }
      }
    });

    

  
// Przełączanie wykresów
document.getElementById('btn-temperature').addEventListener('click', function() {
  document.getElementById('temperature').style.display = 'inline-block';
  document.getElementById('humidity').style.display = 'none';
  document.getElementById('pressure').style.display = 'none';
  document.getElementById('air_quality').style.display = 'none';
});

document.getElementById('btn-humidity').addEventListener('click', function() {
  document.getElementById('temperature').style.display = 'none';
  document.getElementById('humidity').style.display = 'inline-block';
  document.getElementById('pressure').style.display = 'none';
  document.getElementById('air_quality').style.display = 'none';
});

document.getElementById('btn-pressure').addEventListener('click', function() {
  document.getElementById('temperature').style.display = 'none';
  document.getElementById('humidity').style.display = 'none';
  document.getElementById('pressure').style.display = 'inline-block';
  document.getElementById('air_quality').style.display = 'none';
});

    document.getElementById('btn-air_quality').addEventListener('click', function() {
    document.getElementById('temperature').style.display = 'none';
    document.getElementById('humidity').style.display = 'none';
    document.getElementById('pressure').style.display = 'none';
    document.getElementById('air_quality').style.display = 'inline-block';
  });
}
  //document.getElementById('btn-refresh').addEventListener('click', get_data());
  
get_data();


//setInterval(function() {
  //get_data();

//}, 1000);
