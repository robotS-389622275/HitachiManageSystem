
/* JavaScript content from app/view/startTheProcess/DailyOffice/contractStamp.js in folder common */
Ext.define('HelcOA.view.startTheProcess.DailyOffice.contractStamp', {
    extend: 'Ext.Panel',
    id: 'qc_contractStamp_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'qc_surface_ID',
                title: '合同校正章(1)用印申请',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回',
                        id: 'qc_returnStartTheProcessName_ID'
                    },
                    {
                        xtype: 'spacer'
                    },{
                        text: '下一步',
                        id:'qc_ToSelectNode',
                        handler: function() {
                            Ext.Viewport.removeMenu('right');
                        }
                    },
//                    {
//                        xtype: 'button',
//                        handler: function(button, e) {
//                            var menu = Ext.create('Ext.Menu', {
//                                items: [
//                                {
//                                    text: '下一步',
//                                    id: 'qc_ToSelectNode',
//                                    handler: function() {
//                                        Ext.Viewport.removeMenu('right');
//                                    }
//                                },
//                                {
//                                    text: '保存',
//                                    id: 'Save_useStamp',
//                                    handler: function() {
//                                        Ext.Viewport.removeMenu('right');
//                                    }
//                                },
//                                {
//                                    text: '意见',
//                                    id: 'useStamp_suggest',
//                                    handler: function() {
//                                        Ext.Viewport.removeMenu('right');
//                                    }
//                                }
//                                ]
//                            });
//
//                            Ext.Viewport.setMenu(menu, {
//                                side: 'right',
//                                reveal: false
//                            });
//
//                            Ext.Viewport.showMenu('right');
//                        },
//                        itemId: 'mybutton7',
//                        iconCls: 'more'
//                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                id: 'fp',
                items: [
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'fileno',
                                name: 'fileno',
                                label: '编号',
                                labelWidth: '40%',
                                placeHolder: '请输入编号',
                                readOnly:true,
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'agentman',
                                name: 'agentman',
                                label: '申请人',
                                labelWidth: '40%',
                                required: true,
                                readOnly:true,
                                placeHolder: '请输入申请人姓名'
                            },
                            {
                                xtype: 'textfield',
                                id: 'dept',
                                name: 'dept',
                                label: '申请部门',
                                labelWidth: '40%',
                                placeHolder: '请输入申请部门名',
                                readOnly:true,
                            },
                            {
                                xtype: 'textfield',
                                id: 'createdate',
                                name:'createdate',
                                label: '申请日期',
                                labelWidth: '40%',
                                placeHolder: '点击设置时间',
                                readOnly:true,
//                                listeners:{
//                                	focus:function(){
//                                		initDate(Ext.getCmp('createdate').getValue(),'申请日期','createdate');
//                                	}
//                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'subject',
                                name: 'subject',
                                label: '标题',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入标题'
                            },
                            {
                                xtype: 'textnumfield',
                                id: 'fenshu',
                                name: 'fenshu',
                                label: '份数',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入份数'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'autoTextArea',
                                id: 'sqliyou_textarea',
                                name: 'sqliyou_textarea',
                                label: '申请理由',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入申请理由'
                            }
                        ]
                    },
//                    {
//                    	xtype:'fieldset',
//                    	title:'',
//                    	items:[{
//                        	xtype:'textfield',
//                        	label:'科长审批',
//                        	labelWidth: '40%',
//                        	readOnly:true,
//                        	placeHolder: '科长审批'
//                        },{
//                        	xtype:'textfield',
//                        	label:'部长审批',
//                        	labelWidth: '40%',
//                        	readOnly:true,
//                        	placeHolder: '科长审批'
//                        },]
//                    },
//                    {
//                        xtype: 'fieldset',
//                        instructions: '',
//                        title: '',
//                        items: [
//                            {
//                                xtype: 'container',
//                                layout: {
//                                    type: 'hbox',
//                                    align: 'start',
//                                    pack: 'center'
//                                },
//                                items: [
//                                    {
//                                        xtype: 'button',
//                                        margin: 10,
//                                        width: 120,
//                                        text: '拍照'
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        margin: 10,
//                                        width: 120,
//                                        text: '浏览'
//                                    }
//                                ]
//                            }
//                        ]
//                    },
                    {
                        xtype: 'fieldset',
                        hidden: true,
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'conds',
                                name: 'conds',
                                value:'nocon'
                            },
                            {
                                xtype: 'textfield',
                                id: 'userid',
                                name: 'userid'
                            },
                            {
                                xtype: 'textfield',
                                id: 'type',
                                name: 'type'
                            },
                            {
                                xtype: 'textfield',
                                id: 'username',
                                name: 'username'
                            },
                            {
                                xtype: 'textfield',
                                id: 'node',
                                name: 'node'
                            },
                            {
                                xtype: 'textfield',
                                id: 'ctime',
                                name: 'ctime'
                            },
                            {
                                xtype: 'textfield',
                                id: 'piid',
                                name: 'piid'
                            },
                            {
                                xtype: 'textfield',
                                id: 'processname',
                                name: 'processname'
                            },
                            {
                                xtype: 'textfield',
                                id: 'curauthor',
                                name: 'curauthor'
                            },
                            {
                                xtype: 'textfield',
                                id: 'dealmen',
                                name: 'dealmen'
                            },
                            {
                                xtype: 'textfield',
                                id: 'ygbh',
                                name: 'ygbh'
                            },
                            {
                                xtype: 'textfield',
                                id: 'form',
                                name: 'form',
                                value:'form'
                            },
                            {
                                xtype: 'textfield',
                                id: 'arcpath',
                                name: 'arcpath'
                            },
                            {
                                xtype: 'textfield',
                                id: 'arcdate',
                                name: 'arcdate'
                            },
                            {
                                xtype: 'textfield',
                                id: 'idea',
                                name: 'idea'
                            },
                            {
                                xtype: 'textfield',
                                id: 'endprocessdate',
                                name: 'endprocessdate'
                            },
//                            {
//                                xtype: 'textfield',
//                                id: 'createdate',
//                                name: 'createdate'
//                            },
                            {
                            	xtype: 'textfield',
                                id: 'ext1',
                                name: 'ext1'
                            },
                            {
                                xtype: 'textfield',
                                id: 'audit_list',
                                name: 'audit_list'
                            },
                            {
                                xtype: 'textfield',
                                id: 'taskid',
                                name: 'taskid'
                            },
                            {
                                xtype: 'textfield',
                                id: 'mast',
                                name: 'mast'
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'firflow',
                            	name: 'firflow'
                            },{
                            	xtype: 'textfield',
                            	id: 'pi_flag',
                            	name: 'pi_flag'
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'cfg_id',
                            	name: 'cfg_id'
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'createflag',
                            	name: 'createflag'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});