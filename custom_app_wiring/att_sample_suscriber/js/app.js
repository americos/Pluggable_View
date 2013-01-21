Sample.Hello = function( app ) {
	
	app.subscribe("americoTopic", function(topic, data){
		jQuery("#data_display").html("Data was received! :" + data.data + " :: at: ");
	 console.log("Data RECEIVED:", data);
	});
};

