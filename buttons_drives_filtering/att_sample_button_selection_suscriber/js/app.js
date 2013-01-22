Sample.Hello = function( app ) {
	
	
	app.subscribe("citySelected", function(topic, data){
		jQuery("#city_name").html(data.city);
	})

};