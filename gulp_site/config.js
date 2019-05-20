module.exports = {
    "serverPort":"3002",
    "dev_template":{
        "env": "测试",
        "domain": "",
        "userUrl": "http://www.baidu.com",
        "resourcesUrl": "http://www.baidu.com",
        "base":"",
        "trolleyUrl":"/cart/",
        "orderConfirmUrl":"/order/",
        "orderListUrl":"http://www.baidu.com",
        "payUrl":"/buy/",
        "userCenterUrl":"http://www.baidu.com",
        "helpId":"214322",//帮助中心搜索频道号
        "videoUrl":"http://www.baidu.com",
        "data_mpId":"8",
        "user_data_mpId":"9",
        "data_mpId_domin":"testc",
        "ROOT_PATH":""
    },
    "pro_template":{
        "env": "生产",
        "domain": "",
        "userUrl": "http://user.tongshuai.com",
        "resourcesUrl": "http://image.tongshuai.com",
        "base":"",
        "trolleyUrl":"/cart/",
        "orderConfirmUrl":"/order/",
        "orderListUrl":"http://user.tongshuai.com/order/",
        "payUrl":"/buy/",
        "userCenterUrl":"http://user.tongshuai.com/user/",
        "helpId":"226069",//帮助中心搜索频道号
        "videoUrl":"http://www.tongshuai.com/images/",
        "data_mpId":"36",
        "user_data_mpId":"37",
        "data_mpId_domin":"c",
        "ROOT_PATH":""
    },
    "preview_template":{
        "env": "预览",
        "domain": "",
        "userUrl": "",
        "resourcesUrl": "http://www.baidu.com",
        "mpid":"",
        "cpzx":"1",//产品咨询
        "zxxs":"2",//咨询销售
        "shfwfk":"4",//售后服务反馈
        "hyfwyzc":"5",//会员服务与支持
        "zslm":"6",//招商加盟
        "wzwtjjyfk":"8",//网站问题及建议反馈
        "ywhzyzx":"10",//业务合作与咨询
        "trolleyUrl":"./product_trolley_server.shtml",
        "orderConfirmUrl":"./product_orderconfirm.shtml",
        "orderListUrl":"./member_order.shtml",
        "payUrl":"./product_pay.shtml",
        "userCenterUrl":"./member_home.shtml",
        "helpId":"214322",//帮助中心搜索频道号
        "videoUrl":"http://www.baidu.com",
        "data_mpId":"8",
        "user_data_mpId":"9",
        "data_mpId_domin":"testc",
        "ROOT_PATH":""
    },
    "debug_template":{
        "env": "本地",
        "domain": "http://www.baidu.com",
        "userUrl": "http://www.baidu.com",
        "base":"<base href='../'>",
        "ui_base":"<ui_base href='../'>",
        "trolleyUrl":"./product_trolley_server.shtml",
        "orderConfirmUrl":"./product_orderconfirm.shtml",
        "orderListUrl":"./member_order.shtml",
        "payUrl":"./product_pay.shtml",
        "userCenterUrl":"./member_home.shtml",
        "helpId":"214322",//帮助中心搜索频道号
        "videoUrl":"http://www.baidu.com",
        "ROOT_PATH":""
    }
}