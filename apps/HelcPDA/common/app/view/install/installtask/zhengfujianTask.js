/*
 * File: app/view/MyPanel41.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.install.installtask.zhengfujianTask', {
    extend: 'Ext.Panel',
     id:'zhengfujianTask_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '政府检任务表',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        ui:'back',
                        id:'zhengfujianTask_id_FH_BUTTON',
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },{
            	xtype:'hiddenfield',
            	id:'ZHENGFUhidden_id',
            	value:''
            },
            {
                xtype: 'list',
                id:'zhengfujianTaskList_id',
                data: [
                   
                ],
                height: '100%',
                itemId: 'mylist20',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                    '  <tr>',
                    //font-size:18px;
                    '    <td width=65% style="color:#000;">{ELEVATOR_NO}</td>',
                    '      <td width=35% style="padding-right:15px;text-align: right;">批次:{SEQ_NUM}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'ZhengFujianStore2'
            }
        ]
    }

});