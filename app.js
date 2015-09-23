

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
         Ext.create('Ext.container.Viewport',
         {
            layout: 'vbox',
            items: [{
                xtype:'homeMade' // same as alias in view
            }]
         
    });
     }

});