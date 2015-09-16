Ext.define('HomeMade.store.homemade', {
    extend: 'Ext.data.Store',

    

    constructor: function() {
        
        this.callParent([Ext.apply({
            autoload: true,
            model:'HomeMade.model.homemade',
            storeId: 'homemade',
            proxy: {
            type: 'ajax',
            url: 'data/home.json',
            reader: {
                type: 'json',
                root: 'data',
                successProperty: 'success'
            }
    }
})]);
    }
});