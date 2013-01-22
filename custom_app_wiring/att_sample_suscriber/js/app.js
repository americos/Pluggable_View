Sample.Hello = function( app ) {
  
  //app.subscribe("americoTopic", function(topic, data){
  app.subscribe("BarChart.element-click.CA_Branches_APP", function(topic, data){
    
    //Branch comes like: "Miami #01" so lets remove that space and encode the hash.
    var branch = data.Branch.replace(/ #/, "%23");  //HTML Escape code for # is %23
    branch = branch.replace(/ /g,""); //Remove any white space left
    
    var appContainer = app.getContainer ? app.getContainer() : undefined;
    if(appContainer){
      tabPanel = appContainer.findParentByType("tabpanel");
           if(tabPanel){
               tabPanel.loadTab({
                   title : "Drill down",
                   xtype: 'ema-htmlpanel',
                   closable: true,
                   url: "http://prestocloud.jackbe.com/presto/hub/applauncher.html?mid=att_sample_app_recieves_param&city=" + branch
               });
             //return;
           }
    }
    
    jQuery("#data_display").html("Data was received! Branch is:" + branch);
   
   
  });
};

​