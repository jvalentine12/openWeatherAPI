$(document).ready(function(){
    $("#go").click(function(){
       
        var searchval= $("#search").val();
        var part1= "https://api.apixu.com/v1/current.json?"
        var part2= "key=a90bf5c92af543218bd212238170801&q="
        var URL= part1 + part2 + searchval ;
        
        $.getJSON(URL,function(response){
            var temperature= response.current.temp_f;
            var humidity= response.current.humidity;
            var windspeed= response.current.wind_mph;
        $("#weather-results").append("<br>" + temperature + "<br>" + humidity + "<br>" + windspeed);
            
        });
    });
});

