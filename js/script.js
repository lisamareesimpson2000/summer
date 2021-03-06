$('#heading').addClass('animated bounceInDown slow');

$('#years').addClass('animated bounce infinite');

$(document).ready(function(){
  
     $("#btn3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#sectionOne").offset().top
                }, 1000);
            });
          });

//LISA ACTIVITY AND HOURS 
var formValues= document.getElementsByClassName("acthrs");

document.getElementById("btn").addEventListener("click", function(){
    
        //on clicking the button the values of the form elements are stored in form Values
    // var formValues= document.getElementsByClassName("acthrs");
    
    
    var i,sum=0; //i variable for index in for loop, sum is the accumulator
    
    for(i = 0; i < 5; i++) { //loop runs from 0 to 4
        
          sum = sum + parseInt(formValues[i].value); //for every value of i, the accumulator is added new value
         

     }
    
     document.getElementById("hours").innerHTML = sum + " hours"; //display the value of sum




      // var holiday_data = new google.visualization.DataTable();

      google.charts.load('current', {'packages':['corechart']}); //loading the core chart
      google.charts.setOnLoadCallback(drawLisaChart); //calling the function
      // google.charts.setOnLoadCallback(drawHannahChart);

      function drawLisaChart() {
        console.log(formValues[0].value);

        var holiday_data = new google.visualization.DataTable();
        holiday_data.addColumn('string', 'Activity');
        holiday_data.addColumn('number', 'Hours');
        holiday_data.addRows([
          ['Work', parseInt(formValues[0].value)],
          ['Exercise', parseInt(formValues[1].value)],
          ['Portfolio', parseInt(formValues[2].value)],
          ['Family and Friends', parseInt(formValues[3].value)],
          ['Sleep', parseInt(formValues[4].value)]
        ]);

        var options = {
          'title': 'My Holiday Activities',
          'width': 600,
          'height': 400,
          'legend': 'left',
          // 'is3D':true,
          'pieHole': 0.4,
          // 'backgroundColor': '#f6fcfb',
          'backgroundColor': {
          fill: '#f6fcfb',
          stroke: '#c5ede3',
          strokeWidth: 10
          },
          slices: {
            0: { color: 'yellow' },
            1: { color: 'transparent' }, //removes slice
            4: {offset: 0.2}, //explode slice
            5: {offset: 0.3}, //explode slice
          },
          'colors': ['#ade6d8', '#9bcfc2', '#8ab8ac', '#79a197', '#678a81']

        };

        var piechart = new google.visualization.PieChart(document.getElementById('div_chart_Lisa'));

        piechart.draw(holiday_data, options);
      }

//HANNAH ACTIVITY AND HOURS 

document.getElementById("btn2").addEventListener("click", function(){
    
     //on clicking the button the values of the form elements are stored in form Values
 var formValues= document.getElementsByClassName("acthrs2");
 
 
 var i,sum=0; //i variable for index in for loop, sum is the accumulator
 
 for(i = 0; i < 5; i++) { //loop runs from 0 to 4
     
       sum = sum + parseInt(formValues[i].value); //for every value of i, the accumulator is added new value
      

  }

       document.getElementById("hours2").innerHTML = sum + " hours"; //display the value of sum




      // var holiday_data = new google.visualization.DataTable();

      google.charts.load('current', {'packages':['corechart']}); //loading the core chart
      google.charts.setOnLoadCallback(drawHannahChart);


      function drawHannahChart() {
        console.log(formValues[0].value);

        var holiday_data = new google.visualization.DataTable();
        holiday_data.addColumn('string', 'Activity');
        holiday_data.addColumn('number', 'Hours');
        holiday_data.addRows([
          ['Work', parseInt(formValues[0].value)],
          ['Exercise', parseInt(formValues[1].value)],
          ['Portfolio', parseInt(formValues[2].value)],
          ['Family and Friends', parseInt(formValues[3].value)],
          ['Sleep', parseInt(formValues[4].value)]
        ]);

        var options = {
          'title': 'My Holiday Activities',
          'width': 600,
          'height':400,
          'legend': 'left',
          'is3D':true,
          'colors': ['#add8e6', '#9bc2cf', '#8aacb8', '#7997a1', '#67818a']
        };

        var piechart = new google.visualization.PieChart(document.getElementById('div_chart_Hannah'));

        piechart.draw(holiday_data, options);
      }


});

});
