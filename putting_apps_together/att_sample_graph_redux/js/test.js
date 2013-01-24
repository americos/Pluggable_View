var beforePublish = function(topic, data){
  
  
  var me = this;
  var app = me.app; 
  
  var open_app_in = app.properties.target.value || app.properties.target.defaultvalue;
 console.log("open_app_in:", open_app_in);
  
  //data.Url = click_config.url;
  
  
  var tabPanel = "";
  var target= "";
  
  
  var appContainer = app.getContainer ? app.getContainer() : undefined;
  
  if(/element-click/.test(topic)){
    
    //Case 1
    //if(click_config.target == "new_tab"){
    if(open_app_in == "tab"){
      
      console.log("=== Running case 1");
      //Config for Opening a graph in Mashboard side-by-side
      var click_config = {
        url    : '"http://prestocloud.jackbe.com/presto/hub/applauncher.html?mid=att_sample_app_recieves_param_redux&city=" + data.name',
        target  : "new_tab"
      };
      
      //var url = eval(data.Url);
      var open_url = eval(click_config.url);
      console.log("open_url:", open_url);
      
      if(appContainer){
        //If there is tabpanel (app lives in Mashboard)
        tabPanel = appContainer.findParentByType("tabpanel");
        if(tabPanel){
          tabPanel.loadTab({
            title : data.Title,
            xtype: 'ema-htmlpanel',
            closable: true,
            url: open_url
          });
          return;
        }
      }
      
    }
    
    //Case 3
    //if(click_config.target == "same"){
    else if(open_app_in == "self"){
      
      var click_config = {
        appid: "att_sample_app_recieves_param_redux",
        args: { city: 'data.name' },  // This should be an object where the key is the field the app will receive, and the value the string of field name (which will be evaluated) that I want to pass.
        target  : "same"
      };
      
      //Create an object to hold all the params that the app would need.
      var param_obj = {};
          for(var i in click_config.args){
          param_obj[i] = eval(click_config.args[i]);
      }
          
      if(appContainer){
        var parent = appContainer.findParentBy(function(parent){
          return Ext.isFunction(parent.addApp);
        });
        if(parent){
          parent.addApp({
            title : data.Title,
            xtype: 'mashletcontainer',
            closable: true,
            name: click_config.appid, //App id to invoke
            args: param_obj
          });
          return;
        }
      }
    }
    
    //Default Case Open new Window
    else{
      console.log("=== Running case else");

      var url = eval(data.Url);

      //Open app in new Window
      target = click_config.target || "_blank";
      window.open(url, target);
    }
  
  }
  },
  
  interval = setInterval(function(){
  if(Presto.BasicWebApp){
  Presto.BasicWebApp.prototype.beforePublish = beforePublish;
clearInterval(interval);
}
  }, 100);
​