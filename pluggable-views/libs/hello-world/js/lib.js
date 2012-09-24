(function($){ 
 
  var id="hello-world"; 
  Presto.namespace('Sample.view'); 
 
  Sample.view.HelloWorld = function(selector, dataTable, config) { 
	
    //Enable Browser console debugging
		Presto.Console(true);
		
    config = config || {}; 
    var self = this;
    var el = $(selector); 
    self.config = config; 
    
    //Draw method its the View main method
    self.draw = function(dataTable, config){ 
      el.html('<div class="hello"><p>Hello ' + config.my_name + '</p></div>'); 

    }; 
        
     //Called then the view is updated   
    self.update = function(dataTable, options){ 
      el.html('<div class="hello"> Hello ' + config.my_name + '</div>'); 

    }; 

    //This method is called when the user edits the View.
    self.showConfig = function(dataTable, selector, config){ 
      self.form = $(selector).html('<div>My name: <input type="text" name="my_name" /></div>'); 
    }; 
 

    self.getConfig = function(){ 
      if(self.form){ 
          self.config.my_name = self.form.find('input[name=my_name]').val(); 
      } 
      return self.config; 
    }; 
 
    //This function is used by the View Wizard in Presto, if true the View creation process will continue
    self.validate = function(){ 
      var config = self.getConfig(); 
      return config.my_name ? true : false; 
    }; 
  }; 
 
  //Registring the View in Presto
  Presto.view.register({ 
    cls: Sample.view.HelloWorld, 
    lib: id 
  }); 
}(jQuery));