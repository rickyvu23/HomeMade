Ext.define('HomeMade.controller.homemade', {
    extend: 'Ext.app.Controller',

    //models: ['HomeMade.model.homemade'],
    //stores: ['HomeMade.store.homemade'],
    //views: ['HomeMade.view.HomeMade'],
  
    init: function (application) {
        this.control({
            'homemade': {
                render: this.onEditorRender
            }
        });
    },

    onEditorRender: function () {
        console.log("homemade editor was rendered");
    }
});