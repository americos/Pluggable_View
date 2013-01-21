Sample.Hello = function( app ) {
	
	jQuery("#button_event").click(function(){
		app.publish("americoTopic", {
			data: "This is some data that is published",
			date: new Date()
		});
	})
	
	
};