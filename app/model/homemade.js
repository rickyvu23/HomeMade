Ext.define('HomeMade.model.homemade', {
    extend: 'Ext.data.Model',
    alias:'model.homemade',
    id: ' hmmodel',
    fields: [
        
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'ingredient',
            type: 'string'
        },
        {
            name: 'date',
            type: 'date'
        },
        {
            name: 'img'
        }
    ]
});
