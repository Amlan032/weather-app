var cit="lol";
var country="";
var z=0;
var y="";
function location(){
  $.ajax({
    url:"https://ipinfo.io/json",
    success: function(response){
      cit=response.city;
      country=response.country;
       $("#loc").html(cit+" "+country);
    },async: false
  });
}
function weather(){
  var url="http://api.openweathermap.org/data/2.5/weather?q="+cit+"&appid=2ddc01a82ab1d0e74e9c1d61315504c5";
  $.ajax({
    url:url,
    success: function(data){
       z=data.main.temp-273.00;
       y="&deg"+"C";  $("#botor").html("Status: "+data.weather[0].main);
      var f=((9*z)/5)+32;
  var fi="&deg"+"F";
      $("#temp").html(z.toFixed(2)+y); 
      $("#hola").html(f.toFixed(2)+fi);
      
    },async:false
  });
}
$(document).ready(function(){
  location();
  weather();
  
 
  
});