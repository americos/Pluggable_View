var beforePublish = function(topic, data){
	
	data.Url = click_config.url;
	data.Title= "SssS";
		console.log("Branch Name:", data.name);
	
	var me = this;
	var app = me.app;
	var tabPanel = "";
	var target= "";
	
	var url = eval(data.Url);
	//url = data.Url,
	var appContainer = app.getContainer ? app.getContainer() : undefined;
	
	if(/element-click/.test(topic)){
		
		console.log("click_config.target::", click_config.target);
		//Case 1
		if(click_config.target == "new_tab"){
			console.log("=== Running case 1");
			if(appContainer){
				//If there is tabpanel (app lives in Mashboard)
				tabPanel = appContainer.findParentByType("tabpanel");
				if(tabPanel){
					tabPanel.loadTab({
						title : data.Title,
						xtype: 'ema-htmlpanel',
						closable: true,
						url: url
					});
					return;
				}
			}
			
		}

		//Case 3
		if(click_config.target == "same"){
			console.log("=== Running case 3");
			if(appContainer){
				var parent = appContainer.findParentBy(function(parent){
					return Ext.isFunction(parent.addApp);
				});
				if(parent){
					parent.addApp({
								title : data.Title,
								xtype: 'mashletcontainer',
								closable: true,
								name: appid,
								args: args
						});
						return;
				}
			}
		}

		//Default Case Open new Window
		else{
			console.log("=== Running case else");
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