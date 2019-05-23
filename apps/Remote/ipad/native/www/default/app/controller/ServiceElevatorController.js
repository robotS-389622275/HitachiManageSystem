
/* JavaScript content from app/controller/ServiceElevatorController.js in folder common */
/*
 * File: app/controller/ServiceElevatorController.js
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

Ext.define('HelcRemote.controller.ServiceElevatorController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "list#Service_liftDetailed_listNav": {
                itemtap: 'onService_liftDetailed_listNavItemTap'
            },
            "button#Service_liftDetailed_BtnReturn": {
                tap: 'onService_liftDetailed_BtnReturnTap'
            }
        }
    },

    /* 电梯详细画面 功能菜单 */
    onService_liftDetailed_listNavItemTap: function(dataview, index, target, record, e, eOpts) {
        switch(record.get('text')) {
            case '加入收藏':
                var eleno = viewPath.getLast();
                Ext.Msg.confirm('注意', '确认把工号'+eleno+'加入收藏吗?', function(id, value) {
                    if(id!='yes') return;
                    var store = dataUtil.createStore('Service_Monitor_Favorite_Add');
                    console.log(eleno, store);
                    store.loadDat(
                        function() {
                            console.log(store.getData().getAt(0));
                            Ext.toast(store.getData().getAt(0).get('msg'));
                        },
                        Ext.emptyFn(),
                        eleno
                    );
                });
                break;

            case '重新连接遥监':
                var n = Ext.DateExtras.now();
                this.lastTap = this.lastTap || n;
                if(n - this.lastTap < 60 * 1000) {
                    Ext.toast('请勿频繁重连遥监！');
                    return;
                }
                this.lastTap = n;
                remote.send('#RESTARTMONITOR');
                break;

            case '断开遥监':
                this.lastTap = 1;
                remote.send('#STOPMONITOR');
                break;

            default:
                remote.send(dataview, index);
                break;
        }

    },

    /* 电梯详细画面 返回到上层 */
    onService_liftDetailed_BtnReturnTap: function(button, e, eOpts) {
        remote.send('#DISCONNECT');
        viewPath.pop();
        viewUtil.goLast();
    },

    /* 进入电梯遥监页面 */
    doOpenElevatorDetail: function(elevatorno, elevatortype) {
        if(elevatorno==='') return;//elevatorno = '故障电梯';
        elevatortype = elevatortype || '0';

        var menu = elevatortype==='0' ?
        [
            {text: '监控数据'},
            {text: '电梯器件情况'},
            {text: '历史更换记录'},
            {text: '加入收藏'},
            {text: '断开遥监'},
            {text: '重新连接遥监'},
        ]:
        [
            {text: '监控数据'},
            {text: '加入收藏'},
            {text: '断开遥监'},
            {text: '重新连接遥监'},
        ];

        viewUtil.goNext('Service.liftDetailed', {
            onInitial: function() {
                viewPath.push(elevatorno);
                Ext.getCmp(this.getId() + '_title').setHtml(viewPath.print());
                Ext.getCmp('Service_liftDetailed_listNav').setData(menu);
            },
            onShow: function() {
                if(elevatorno !== '故障电梯')
                    remote.send(this, undefined, elevatorno + '|' + elevatortype);
            }
        });
    }

});