
/* JavaScript content from app/view/Vip/vipContractLift.js in folder common */
/*
 * File: app/view/Vip/vipContractLift.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.view.Vip.vipContractLift', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'remote-service',
        id: 'Vip_vipContractLift',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                cls: 'remote-breadCrumb',
                docked: 'top',
                items: [
                    {
                        xtype: 'label',
                        cls: 'remote-breadCrumb-con',
                        html: '大客户与大项目 > 大客户 > 大客户合同信息  > 电梯工号'
                    },
                    {
                        xtype: 'panel',
                        cls: 'remote-breadCrumb-buttonBox',
                        docked: 'right',
                        items: [
                            {
                                xtype: 'button',
                                cls: 'remote-buttonColor-orange',
                                id: 'Vip_vipContractLift_BtnReturn',
                                text: '返回'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: [
                    'remote-content',
                    'remote-service'
                ],
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'install-vipContract',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                flex: 1,
                                cls: 'install-vipContracts-LBox',
                                docked: 'left',
                                items: [
                                    {
                                        xtype: 'panel',
                                        cls: 'install-vipContracts-buttonBox',
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: '上一台'
                                            },
                                            {
                                                xtype: 'button',
                                                text: '下一台'
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'clear'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                cls: 'install-vipContracts-RBox',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'dataview',
                                        flex: 1,
                                        cls: 'install-vipContract-listBox',
                                        id: 'Vip_vipContractLift_companyList',
                                        itemTpl: [
                                            '<div class="install-vipContract-list">',
                                            '    <div class="install-vipContract-list-lift">{lift}</div>',
                                            '</div>'
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});