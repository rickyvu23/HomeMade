Ext.define('HomeMade.view.HomeMade', {
	extend: 'Ext.panel.Panel',
	//alias: 'widget.HomeMade',
	
	title: 'HomeMade',
	id : 'HomeMade',
	width : '100%',
    height : 900,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
	
/*
Ext.apply() is used to simplify the copying of many properties from a source to a target 
object (most of the time the source and target objects have different sets of properties) 
and it can in addition be used to apply default values (third argument).

Note that it will not make deep clones! Meaning if you have a array or a object as property 
value it will apply the reference!

*/


	initComponent: function () {

		Ext.apply(this, 		 
        {
        items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    width : '100%',
    				height : 500,
                    store:'homemade',
                    
//name function o muc nay de cho biet khi click vao cai list thi no se load cai function
//dc viet ra o phia duoi sau CallParent.
                    listeners: {
                	select: { fn: this.onGridpanelSelect,
                			scope: this
                		}
            		},

			        columns : [
							
								{
									xtype:'gridcolumn',
									dataIndex: 'name',
									text:'Name',
									flex:1
								},
								{
									xtype:'gridcolumn',
									dataIndex: 'ingredient',
									text: 'Ingredient',
									flex: 1
								},
								{
									xtype:'datecolumn',
									dataIndex:'date',
									text: 'Date',
									flex: 1
								},
								{
									xtype: 'gridcolumn',
									dataIndex: 'img',
									text:'Img'
								}	
	
								],

					dockedItems: [
					{
						xtype: 'toolbar',
						dock: 'bottom',
						ui: 'footer',
						layout: { pack: 'center'},
						items: [
								{
				                    text : 'Create',
				                    itemId : 'btnCreate'
				                    /*onCreate: function(){
				                    	var a = this.getHomeMade();
				                    	var b = a.getStore();
				                    	var create = Ext.create('HomeMade.medol/homemade');
				                    	create.set("name", "item's name");
				                    	create.set("ingredient", "what are in it?");
				                    	create.set("date", "");
				                    	b.add(creat);
				                    	a.editingPlugin.starEdit(create, 3);

				                    } */
				                }, 
				                {
				                    text : 'Load Data',
				                    itemId : 'btnLoad',
				                    onLoadClick: function(){
				                    	var store = Ext.getStore('homemade');
				                    	store.load();
				                    }
				                }, 
				                {
				                    text : 'Save',
				                    itemId : 'btnSave'
				                }, 
				                {
				                    text : 'Delete',
				                    itemId : 'btnDelete'
				                }

						]
					}
					]
				
    
    			},

    				{
                    xtype: 'panel',
                    flex: 1,
                    title: 'Picture',
                    itemId:'pic',
                    
                    tpl: [
                			'<img src="data/{img}" style="float: center" />'
                			]
                    
                }

    			],
    			listeners : { // need this line when add event listener

    			//sau khi cai view render xong phai goi store load thi moi lay dc data.
	        	afterrender : function(){ 
		        	var store = Ext.getStore('homemade');
	        		store.load();

		        },
		        
	        }

	   	

		}
    			);
        
	this.callParent(arguments);
},
				//outside apply
				onGridpanelSelect: function (rowmodel, record, index, eOpts) {
	   				var pic = this.child('#pic'); // chi dinh gia tri cua pic la nhanh con bang #
	   				pic.update(record.data);		// sau do update
	   	}
});