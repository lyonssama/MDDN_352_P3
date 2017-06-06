$(document).ready(function(){

//API 
var _FreeApiBaseURL = 'http://api.worldweatheronline.com/free/v1/';
var _FreeApiKey = '310facabc35e4f16a4913539172804';

function JSONP_MarineWeather(input) {
    var url = _FreeApiBaseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&fx=" + input.fx + "&key=" + _FreeApiKey;

    jsonP(url, input.callback);


}


// -------------------------------------------

// Helper Method
function jsonP(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        cache: true,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
            console.log(JSON.stringify(json));
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}

//Login form
	$('.message a').click(function(){
  	 $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});



  $add = $('#add-user');
  
  setTimeout(function() {
    $add.addClass('hidden');
  }, 200)
  var numRows = 2;
  
  $('input').keyup(function() {
    var isReady = false;
    
    $('input').each(function() {
      if ($(this).val() != '') {
        isReady = true;  
      }
    });
  
    if (isReady) {
      $add.removeClass('hidden'); 
    }
    else {
      $add.addClass('hidden');
    }
  });
  
  $add.on('click', function() {
    var $scope = $('.tb-entry');
    var name = $scope.find('#name').val();
    var age = $scope.find('#age').val();
    var favNum = $scope.find('#fav-num').val();
    
    $scope.find('input').attr('disabled', 'true');
    $scope.find('input').val('');
    
    $scope.after(
      '<div class="tb-data row row-'+numRows+'">' +
      '<ul class="data-options">' +
      '<li><a href="#"><i class="fa fa-pencil"></i> Edit</a></li>' +
      '<li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>' +
      '</ul>' +
      '<div class="col">' +
      name +
      '</div>' +
      '<div class="col">' +
      age +
      '</div>' +
      '<div class="col last">' +
      favNum +
      '</div>' +
      '</div>');
    
    $('.row-'+numRows).hide();  
    $('.row-'+numRows).slideDown(300);
    
    setTimeout(function() {
      $scope.find('input').removeAttr('disabled');
      $scope.find('input').first().focus();
      $add.addClass('hidden');
    }, 300);
    
    numRows++;
  });



//   var geocoder;

//   initialize();
  
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// } 
// //Get the latitude and the longitude;
// function successFunction(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     codeLatLng(lat, lng)
// }

// function errorFunction(){
//     alert("Geocoder failed");
// }

//   function initialize() {
//     geocoder = new google.maps.Geocoder();
//   }

//   function codeLatLng(lat, lng) {

//     var latlng = new google.maps.LatLng(lat, lng);
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         if (results[1]) {
//          //formatted address
//          //alert(results[0].formatted_address)
//         //find country name
//              for (var i=0; i<results[0].address_components.length; i++) {
//             for (var b=0;b<results[0].address_components[i].types.length;b++) {

//             //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
//                 if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
//                     //this is the object you are looking for
//                     city= results[0].address_components[i];
//                   ciudad=city.short_name;
//                   $('#city').append(city.short_name);
//                     getWeather();                    
//                 }
//             }
//         }
//         //city data
//        // alert(city.short_name+ " " + city.long_name)
        

//         } else {
//           alert("No results found");
//         }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }
// });

// function marineWeather() {
// 	var _FreeApiBaseURL = 'http://api.worldweatheronline.com/free/v1/';
// 	var _FreeApiKey = '310facabc35e4f16a4913539172804';

// 	function JSONP_MarineWeather(input) {
// 		var url = _FreeApiBaseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&fx=" +input.fx + "&key=" + _FreeApiKey;
// 		jsonP(url, input.callback);
// 		console.log(JSONP_MarineWeather);
// 	}

// 	function jsonP(url, callback) {
// 		$.ajax({
//         type: 'GET',
//         url: url,
//         async: false,
//         contentType: "application/json",
//         jsonpCallback: callback,
//         dataType: 'jsonp',
//         success: function (json) {
//             console.dir('success');
//         },
//         error: function (e) {
//             console.log(e.message);
//         }
//     	});
// 	}
// }


// function getWeather() {
    
//     var weatherApiUrl = 'http://api.worldweatheronline.com/free/v2/marine.ashx?q='+ciudad+'&format=json&num_of_days=3&key=7aa64d37601dd2613107a67d98e60';
   
//   $.get(weatherApiUrl, function(weather) {
//     console.log(ßß.data);
//     var windDes =weather.data.current_condition[0].weatherDesc[0].value;
//     var temc =weather.data.current_condition[0].temp_C;
//     var temf =weather.data.current_condition[0].temp_F;
//     var precip =weather.data.current_condition[0].precipMM;
//     var windSkm =weather.data.current_condition[0].windspeedKmph;
//     var windMi =weather.data.current_condition[0].windspeedMiles;
//     var windPoint =weather.data.current_condition[0].winddir16Point;
//     var Humi =weather.data.current_condition[0].humidity;
//     var cImage =weather.data.current_condition[0].weatherIconUrl[0].value;
//     $('#desc').text(windDes);  
//     $('#temcf').text(temc+'°C'+' | '+temf+'°F');  
//     $('#precip').text( 'Precip: '+ precip +' mm');  
//     $('#wind').text('Wind: '+windPoint+' at '+windMi+' mph | '+windSkm+' km/h');
//     $('#hum').text('Humidity: '+Humi+' %');
//     $("#cImage").attr("src", cImage);
    
//     //tomorow
//     var tMaxC =weather.data.weather[1].maxtempC;
//     var tMimC =weather.data.weather[1].mintempC;
//     var tMaxF =weather.data.weather[1].maxtempF;
//     var tMinF =weather.data.weather[1].mintempF;
//     var tImg =weather.data.weather[1].hourly[5].weatherIconUrl[0].value;;
    
//     $('#tMin').text('Min: '+tMimC+'°C'+' | '+tMinF+'°F'); 
//     $('#tMax').text('Max: '+tMaxC+'°C'+' | '+tMaxF+'°F');
//    $("#tImage").attr("src", cImage);
//     //After tomorow
//     var atMaxC =weather.data.weather[2].maxtempC;
//     var atMimC =weather.data.weather[2].mintempC;
//     var atMaxF =weather.data.weather[2].maxtempF;
//     var atMinF =weather.data.weather[2].mintempF;
//     var atImg =weather.data.weather[2].hourly[5].weatherIconUrl[0].value;;
    
//     $('#atMin').text('Min: '+atMimC+'°C'+' | '+atMinF+'°F'); 
//     $('#atMax').text('Max: '+atMaxC+'°C'+' | '+atMaxF+'°F');
//     $("#atImage").attr("src", cImage);
    
//     },"json");

//   };
  
//   var ciudad;


});