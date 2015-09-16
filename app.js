

Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
	
	models: [
        'homemade'
    ],
    stores: [
        'homemade'
    ],
    views: [
        'HomeMade'
    ],

    name: 'HomeMade',
	
    controllers: [
        'homemade'
    ],
    
	launch: function() {
        Ext.create('HomeMade.view.HomeMade',{renderTo: Ext.getBody()});
    }
});