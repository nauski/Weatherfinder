$(document).ready(function(){

	    if (navigator.geolocation) {
      		  navigator.geolocation.getCurrentPosition(function(pos) {
  	 			$("#pos").html("lat: " +  pos.coords.latitude + "</br>" +
					       "long: " + pos.coords.longitude);			
    	
});
}



     var api = "http://api.openweathermap.org/data/2.5/weather?id=658225&appid=c90c8aa90a2c7f2b03f4a8ccb7d436a8";
     $.getJSON(api, function(data){
//   alert(data.coord.lon);

     });
});
