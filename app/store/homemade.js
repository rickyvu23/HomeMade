Ext.define('HomeMade.store.homemade', {
    extend: 'Ext.data.Store',

    

    //constructor: function() {
        
        //this.callParent([Ext.apply({
            autoload: false,
            model:'HomeMade.model.homemade',
            storeId: 'homemade',
            proxy: {
            type: 'ajax',
            url: 'data/home.json',
            reader: {
                type: 'json',
                root: 'data',
                successProperty: 'success'
            },
            api : 
                {
                    read : 'data/home.json',
                    create : 'data/home.json',
                    update : 'data/home.json',
                    destroy : 'data/home.json',
                    save: 'data/home.json'
                },
            actionMethods : 
                {
                    destroy : 'POST',
                    read : 'GET',
                    create : 'POST',
                    update : 'POST',
                    save: 'POST'
                }
    }
//})]);
    //}
});