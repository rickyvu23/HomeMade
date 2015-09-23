Ext.define('HomeMade.controller.homemade', {
    extend: 'Ext.app.Controller',

    models: ['HomeMade.model.homemade'],
    stores: ['HomeMade.store.homemade'],
    views: ['HomeMade.view.HomeMade'],
    refs: [{
        ref: 'homeMade',
        selector: 'homeMade'  //from app.js
    }],
    init: function () {
        //tao button actions sau co phia duoi viet function action.
        this.control({
           
            'viewport > homeMade button[itemId=btnCreate]':
            // point to file in view folder and the button with itemId's value
            {
                click: this.onCreateClick
            },
            'viewport > homeMade button[itemId=btnLoad]':
            {
                click: this.onLoadClick
            },
            'viewport > homeMade button[itemId=btnSave]':
            {
                click: this.onSaveClick
            },
            'viewport > homeMade button[itemId=btnDelete]':
            {
                click: this.onDeleteClick
            },
        });
    },

    /*onEditorRender: function () {
        console.log("homemade editor was rendered");
    },*/


    onCreateClick: function(){
                                        var HomeMade = this.gethomeMade();
                                        var b = HomeMade.getStore('HomeMade.store.homemade');
                                        var c = Ext.create('homemade',{
                                            name: '',
                                            ingredient: '',
                                            date: ''

                                        });
                                        //cModel.set("name", "item's name");
                                        //cModel.set("ingredient", "what are in it?");
                                        //cModel.set("date", "");
                                        //cModel.set("img", "");
                                        b.add(c);
                                        //HomeMade.editingPlugin.starEdit(c);

                                    },
    onLoadClick: function(){
                                       var store = Ext.getStore('homemade');
                                       store.load();
                                       console.log("loaded");
                                    },
    onDeleteClick: function(){
                                        var HomeMade = this.getHomeMade();
                                        var store = HomeMade.getStore();
                                        var slectedRows = HomeMade.getModel('HomeMade.model.homemade').getSelection();
                                        if (selectedRows.length)
                                            store.remove(selectedRows);
                                        else
                                            Ext.Msg.alert('Status', 'Please select at least one record to delete!');

                                    }                                


});