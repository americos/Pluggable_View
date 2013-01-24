Sample.Hello = function( app ) {
 
	//This app will publish a topic when a button is clicked.
	var buttons = jQuery("#buttons_container").children();

	jQuery.each( buttons, function(index, value){
		
		jQuery(value).click(function(e){
			// Getting value of button
			var elem = e.srcElement;
		 
			var city = elem.value;
			 //Function for Publishing the topic		
			app.publish("citySelected", {
				city: city
			})
			
		})
	})
				
				
		 
};
		


