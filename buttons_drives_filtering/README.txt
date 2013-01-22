INSTRUCTIONS
==============================
1) Upload att_sample_button_selections into presto
2) Drag it into a Mashboard workspace
3) Drag ATT_SAMPLE_APP_RECIEVES_PARAM into workspace (this app lives in the custom_app_wiring folder)
4) Click on wire in the att_sample_app_receives_param and select:

	as suscriber: att_sample_app_receives_param :: propertychange
	as publisher: citySelected.att_sample_button_selections

	map city with city


