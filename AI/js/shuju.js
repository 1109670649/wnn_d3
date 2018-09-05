
//界面的右上角的时钟设置开始
setInterval(function(){
    var date = new Date();
    var str = show_num(date.getHours())+":"+show_num(date.getMinutes())+":"+show_num(date.getSeconds());
    $("#time").html(date.toLocaleDateString()+" "+str);
},1000);
function show_num(n){
    var str2;
    if(n<10){
        str2 = "0"+n;
    }else{
        str2 = n;
    }
    return str2;
}
//界面的右上角的时钟设置结束
//全局参数开始
var datafunnel;
var datapie;
var dataline;
//设置地图正下方的参数
var datazhu;
var data_province=[
    {name: '北京',value: 1189},
    {name: '江苏',value: 493},
    {name: '广东',value: 1230},
    {name: '山东',value: 106},
    {name: '浙江',value: 733},
    {name: '河北',value: 316},
    {name: '上海',value: 1270},
    {name: '辽宁',value: 169},
    {name: '四川',value: 370},
    {name: '河南',value: 261},
    {name: '天津',value: 118},
    {name: '黑龙江',value: 28},
    {name: '湖北',value: 372},
    {name: '山西',value: 8},
    {name: '陕西',value: 124},
    {name: '江西',value: 21},
    {name: '安徽',value: 167},
    {name: '福建',value: 154},
    {name: '湖南',value: 139},
    {name: '新疆',value: 6},
    {name: '内蒙古',value: 5},
    {name: '重庆',value: 114},
    {name: '吉林',value: 16},
    {name: '甘肃',value: 3},
    {name: '宁夏',value: 1},
    {name: '云南',value: 46},
    {name: '贵州',value: 32},
    {name: '广西',value: 32},
    {name: '青海',value: 2},
    {name: '海南',value: 7},
    {name: '澳门',value: 2 },
    {name: '西藏',value: 0 },
    {name: '台湾',value: 2},
    {name: '香港',value: 2}
];
$("#btn").click(function(){
    //返回中国地图
    drawmap(data_province);
    //右下角图---返回全国的数据
    datafunnel=[
        {value: 964, name: '上市公司'},
        {value: 23, name: '事业单位'},
        {value: 394, name: '创业公司'},
        {value: 497, name: '合资企业'},
        {value: 366, name: '国企'},
        {value: 617, name: '外资企业'},
        {value: 4839, name: '民营企业'}

    ];
    drawfunnel(datafunnel);
//右上角的图----返回全国的数据
    datapie= [
        ['专科', 1692],
        ['本科', 4641],
        ['硕士', 644]
    ];

    drawpie(datapie);
    //左上角设计点击返回--全国数据
    dataline={
        data1:[4500, 6000, 8000, 11000],
        data2:[6000, 8000, 10000, 13000],
        data3:[8500, 10000, 13000, 15000]
    };
    drawline(dataline);

    //设置地图正下方的---返回全国省份数据；
    datazhu={
        dataAxis :['北京','上海','天津','安徽', '福建', '广东', '广西', '贵州', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁','山东', '陕西', '四川', '云南', '浙江'],
        data:[1198,713,59,167, 153,1194, 29, 19, 317, 261, 28, 372, 135, 16, 593, 21, 167, 106, 114, 366,46,700]
    };
    drawbar(datazhu);

});

//右下角的图设置参数
 datafunnel=[
    {value: 964, name: '上市公司'},
    {value: 23, name: '事业单位'},
    {value: 394, name: '创业公司'},
    {value: 497, name: '合资企业'},
    {value: 366, name: '国企'},
    {value: 617, name: '外资企业'},
    {value: 4839, name: '民营企业'}

];
drawfunnel(datafunnel);
//右上角的数据设置
datapie= [
    ['专科', 1692],
    ['本科', 4641],
    ['硕士', 644]
];
// datapie=[
//     {value:1692, name:'专科'},
//     {value:4641, name:'本科'},
//     {value:644, name:'硕士'}
// ];
drawpie(datapie);
//左上角折线图参数的设置
dataline={
    data1:[4500, 6000, 8000, 11000],
    data2:[6000, 8000, 10000, 13000],
    data3:[8500, 10000, 13000, 15000]
};
drawline(dataline);

//设置地图正下方的参数引入数据；
datazhu={
    dataAxis :['北京','上海','天津','安徽', '福建', '广东', '广西', '贵州', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁','山东', '陕西', '四川', '云南', '浙江'],
    data:[1198,713,59,167, 153,1194, 29, 19, 317, 261, 28, 372, 135, 16, 593, 21, 167, 106, 114, 366,46,700]
};
 drawbar(datazhu);
//全局参数结束
//地图的设置开始
function drawmap(content1){
    var map_echarts = echarts.init(document.getElementById('map_echarts'));
    var  option = {
        title: {
            text:'人工智能行业需求量',
            left: 'center',
            textStyle:{
                color:'white'
            }

        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show:false
        },
        visualMap: {
            min: 0,
            max: 1500,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            splitNumber:5,
            calculable: true,
            textStyle:{
                color:'white'
            },inRange: {
                color:['#17bbff','#305aff'],
                symbolSize: [30, 100]
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            color:'white',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name:'人工智能职业分析',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:content1
            }
        ]
    };
    map_echarts.setOption(option);
    //设置鼠标点击地图事件，点击获取指定的元素，进行指定地区省地图的展示
    map_echarts.on('click',function(map_data){
       //  console.log(map_data);
       // console.log(map_data.name);
        if(map_data.name==='北京'){
            drawbj();
            //右下角图参数
            datafunnel=[
                {value: 217, name: '上市公司'},
                {value: 42, name: '事业单位'},
                {value: 72, name: '创业公司'},
                {value: 69, name: '合资企业'},
                {value: 86, name: '国企'},
                {value: 147, name: '外资企业'},
                {value: 700, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
           //右上角图参数的设置
            datapie= [
                ['专科', 170],
                ['本科', 821],
                ['硕士', 152]
            ];
            // datapie=[
            //     {value:170, name:'专科'},
            //     {value:821, name:'本科'},
            //     {value:152, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[5500, 7500, 10000, 13000],
                data2:[6000, 10000, 13000, 16000],
                data3:[8500, 12000, 15000, 18000]
            };
            drawline(dataline);
            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['昌平区','朝阳区','大兴区','东城区','房山区','丰台区','海淀区','石景山区','通州区','西城区'],
            data:[93,226,58,47,37,39,570,33,62,24]
        };
            drawbar(datazhu);

        }
        if(map_data.name==='天津'){
            drawtj();
            //右下角图参数
            datafunnel=[
                {value: 2, name: '上市公司'},
                {value: 1, name: '事业单位'},
                {value: 2, name: '创业公司'},
                {value: 5, name: '合资企业'},
                {value: 4, name: '国企'},
                {value: 11, name: '外资企业'},
                {value: 22, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
            //右上角图参数的设置
            datapie= [
                ['专科', 14],
                ['本科', 32],
                ['硕士', 7]
            ];
            // datapie=[
            //     {value:14, name:'专科'},
            //     {value:32, name:'本科'},
            //     {value:7, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[4500, 6000, 8000, 10000],
                data2:[6000, 7500, 9000, 12000],
                data3:[7000, 10000, 13000, 15000]
            };
            drawline(dataline);
            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['北辰区','滨海新区','东丽区','和平区','津南区','南开区','西青区'],
                data:[18,12,17,19,12,15,25]
            };
            drawbar(datazhu);

        }
        if(map_data.name==='河北'){
            drawhb();
            //右下角图参数
            datafunnel=[
                {value: 23, name: '上市公司'},
                {value: 1, name: '事业单位'},
                {value: 1, name: '创业公司'},
                {value: 2, name: '合资企业'},
                {value: 2, name: '国企'},
                {value: 2, name: '外资企业'},
                {value: 287, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
            //右上角图参数的设置
            datapie= [
                ['专科', 135],
                ['本科', 41],
                ['硕士', 1]
            ];
            // datapie=[
            //     {value:135, name:'专科'},
            //     {value:41, name:'本科'},
            //     {value:1, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[5000, 7000, 9000, 11000],
                data2:[6000, 9000, 11000, 12000],
                data3:[7000, 10000, 12000, 15000]
            };
            drawline(dataline);
            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['邯郸','廊坊','秦皇岛','石家庄','邢台','雄安新区','燕郊开发区'],
                data:[3,7,3,294,2,1,6]
            };
            drawbar(datazhu);


        }
        if(map_data.name==='广东'){
            drawgd();
            //右下角图参数
            datafunnel=[
                {value: 75, name: '上市公司'},
                {value: 2, name: '事业单位'},
                {value: 38, name: '创业公司'},
                {value: 53, name: '合资企业'},
                {value: 127, name: '国企'},
                {value: 34, name: '外资企业'},
                {value: 874, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
            //右上角图参数的设置
            datapie= [
                ['专科', 378],
                ['本科', 675],
                ['硕士', 64]
            ];
            // datapie=[
            //     {value:378, name:'专科'},
            //     {value:675, name:'本科'},
            //     {value:64, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[5500, 7000, 9000, 10000],
                data2:[6000, 8000, 11000, 12000],
                data3:[7000, 9000, 12000, 14000]
            };
            drawline(dataline);
            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['广州市','东莞市','佛山市','汕头市','中山市','湛江市','深圳市','珠海','肇庆市','惠州','梅州','河源','江门','潮州'],
                    data:[856,37,70,25,15,12,11,76,23,31,27,15,20,12]
        };
            drawbar(datazhu);
        }
        if(map_data.name==='江苏'){
            drawjs();
            //右下角图参数
            datafunnel=[
                {value: 40, name: '上市公司'},
                {value: 2, name: '事业单位'},
                {value: 36, name: '创业公司'},
                {value: 61, name: '合资企业'},
                {value: 23, name: '国企'},
                {value: 57, name: '外资企业'},
                {value: 376, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
            //右上角图参数的设置
            datapie= [
                ['专科', 161],
                ['本科', 341],
                ['硕士', 46]
            ];
            // datapie=[
            //     {value:161, name:'专科'},
            //     {value:341, name:'本科'},
            //     {value:46, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[4500, 6000, 8500, 10000],
                data2:[6000, 8500, 11000, 13000],
                data3:[7500, 10000, 12000, 15000]
            };
            drawline(dataline);

            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['常州','南京','苏州','无锡市','徐州','扬州','镇江','南通'],
                    data:[11,313,115,25,8,7,5,9]
        };
            drawbar(datazhu);
        }
        if(map_data.name==='浙江'){
            drawzj();
            //右下角图参数
            datafunnel=[
                {value: 227, name: '上市公司'},
                {value: 1, name: '事业单位'},
                {value: 64, name: '创业公司'},
                {value: 36, name: '合资企业'},
                {value: 12, name: '国企'},
                {value: 51, name: '外资企业'},
                {value: 452, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
            //右上角图参数的设置
            datapie= [
                ['专科', 158],
                ['本科', 571],
                ['硕士', 86]
            ];
            // datapie=[
            //     {value:158, name:'专科'},
            //     {value:571, name:'本科'},
            //     {value:86, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[5000, 7000, 9000, 11000],
                data2:[6000, 8500, 12000, 14000],
                data3:[8000, 10000, 13000, 16000]
            };
            drawline(dataline);

            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['杭州','嘉兴','金华','宁波','绍兴','台州','温州'],
                    data:[672,3,5,33,7,5,8]
        };
            drawbar(datazhu);
        }
        if(map_data.name==='上海'){
            drawsh();
            //右下角图参数
            datafunnel=[
                {value: 149, name: '上市公司'},
                {value: 8, name: '事业单位'},
                {value: 64, name: '创业公司'},
                {value: 137, name: '合资企业'},
                {value: 24, name: '国企'},
                {value: 162, name: '外资企业'},
                {value: 771, name: '民营企业'}

            ];
            drawfunnel(datafunnel);
            //右上角图参数的设置
            datapie= [
                ['专科', 389],
                ['本科', 842],
                ['硕士', 159]
            ];
            // datapie=[
            //     {value:389, name:'专科'},
            //     {value:842, name:'本科'},
            //     {value:159, name:'硕士'}
            // ];
            drawpie(datapie);
            //左上角图参数的设置
            dataline={
                data1:[5000, 7500, 9500, 12000],
                data2:[7000, 9000, 11000, 13000],
                data3:[8000, 10000, 12000, 16000]
            };
            drawline(dataline);

            //设置地图正下方的参数引入数据；
            datazhu={
                dataAxis :['宝山区','奉贤区','虹口区','黄浦区','嘉定区','静安区','闵行区','浦东新区','普陀区','青浦区','松江区','徐汇区','杨浦区','长宁区'],
                data:[8,1,41,52,23,80,71,323,55,2,27,180,80,46]
            };
            drawbar(datazhu);

        }
    })
}

//地图的设置结束
//北京地图的设置开始
function drawbj(){
    var bj_echarts = echarts.init(document.getElementById('map_echarts'));
    var datainfo=[
        {name:"东城区",value:47},
        {name:"西城区",value:24},
        {name:"朝阳区",value:226},
        {name:"丰台区",value:39},
        {name:"石景山区",value:33},
        {name:"海淀区",value:570},
        {name:"门头沟区",value:1},
        {name:"房山区",value:37},
        {name:"通州区",value:62},
        {name:"顺义区",value:26},
        {name:"昌平区",value:93},
        {name:"大兴区",value:58},
        {name:"怀柔区",value:7},
        {name:"平谷区",value:8},
        {name:"密云区",value:5},
        {name:"延庆区",value:3}
    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 200,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '北京',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datainfo
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/110100.json',function(getJson){
            bj_echarts.hideLoading();
            echarts.registerMap('110100',getJson);
            bj_echarts.setOption(option);
        })
}
//北京地图的设置结束
//河北地图的设置开始
function drawhb(){
    var hb_echarts = echarts.init(document.getElementById('map_echarts'));
    var datahb=[
        {name:"石家庄市",value:294},
        {name:"唐山市",value:1},
        {name:"秦皇岛市",value:3},
        {name:"邯郸市",value:3},
        {name:"邢台市",value:2},
        {name:"保定市",value:6},
        {name:"张家口市",value:1},
        {name:"承德市",value:1},
        {name:"沧州市",value:1},
        {name:"廊坊市",value:7},
        {name:"衡水市",value:1}
    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 200,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '河北',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datahb
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/120100.json',function(getJson){
        hb_echarts.hideLoading();
        echarts.registerMap('110100',getJson);
        hb_echarts.setOption(option);
    })
}
//河北地图的设置结束
//天津地图设置开始
function drawtj(){
    var tj_echarts = echarts.init(document.getElementById('map_echarts'));
    var datatj=[
        {name:"和平区",value:19},
        {name:"河东区",value:1},
        {name:"河西区",value:1},
        {name:"南开区",value:15},
        {name:"河北区",value:1},
        {name:"红桥区",value:2},
        {name:"东丽区",value:17},
        {name:"西青区",value:25},
        {name:"津南区",value:12},
        {name:"北辰区",value:18},
        {name:"武清区",value:3},
        {name:"宝坻区",value:4},
        {name:"滨海新区",value:12},
        {name:"宁河县",value:7},
        {name:"静海县",value:2},
        {name:"蓟县",value:6}
    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 30,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '天津',
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datatj
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/120100.json',function(getJson){
        tj_echarts.hideLoading();
        echarts.registerMap('110100',getJson);
        tj_echarts.setOption(option);
    })
}
//天津地图设置结束
//广东省地图设置开始
function drawgd(){
    var gd_echarts = echarts.init(document.getElementById('map_echarts'));
    var datagd=[
        {name:"广州市",value:856},
        {name:"韶关市",value:1},
        {name:"深圳市",value:11},
        {name:"珠海市",value:76},
        {name:"汕头市",value:25},
        {name:"佛山市",value:70},
        {name:"江门市",value:20},
        {name:"湛江市",value:12},
        {name:"茂名市",value:1},
        {name:"肇庆市",value:23},
        {name:"惠州市",value:31},
        {name:"梅州市",value:27},
        {name:"汕尾市",value:1},
        {name:"河源市",value:15},
        {name:"阳江市",value:1},
        {name:"清远市",value:1},
        {name:"东莞市",value:37},
        {name:"中山市",value:15},
        {name:"潮州市",value:12},
        {name:"揭阳市",value:1},
        {name:"云浮市",value:1}
    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 200,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '广东',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datagd
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/guangdong.json',function(getJson){
        gd_echarts.hideLoading();
        echarts.registerMap('110100',getJson);
        gd_echarts.setOption(option);
    })
}
//广东省地图设置结束
//江苏地图设置开始
function drawjs(){
    var js_echarts = echarts.init(document.getElementById('map_echarts'));
    var datajs=[
        {name:"南京市",value:313},
        {name:"无锡市",value:25},
        {name:"徐州市",value:8},
        {name:"常州市",value:11},
        {name:"苏州市",value:115},
        {name:"南通市",value:9},
        {name:"连云港市",value:1},
        {name:"淮安市",value:1},
        {name:"盐城市",value:1},
        {name:"扬州市",value:7},
        {name:"镇江市",value:5},
        {name:"泰州市",value:1},
        {name:"宿迁市",value:1}
    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 200,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '江苏',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datajs
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/jiangsun.json',function(getJson){
        js_echarts.hideLoading();
        echarts.registerMap('110100',getJson);
        js_echarts.setOption(option);
    })
}
//江苏地图设置结束
//浙江地图设置开始
function drawzj(){
    var zj_echarts = echarts.init(document.getElementById('map_echarts'));
    var datazj=[
        {name:"丽水市",value:1},
        {name:"杭州市",value:672},
        {name:"温州市",value:8},
        {name:"宁波市",value:33},
        {name:"舟山市",value:1},
        {name:"台州市",value:5},
        {name:"金华市",value:5},
        {name:"衢州市",value:1},
        {name:"绍兴市",value:7},
        {name:"嘉兴市",value:3},
        {name:"湖州市",value:1}

    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 200,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '浙江',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datazj
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/zhejiang.json',function(getJson){
        zj_echarts.hideLoading();
        echarts.registerMap('110100',getJson);
        zj_echarts.setOption(option);
    })
}
//浙江地图设置结束
//上海地图设置开始
function drawsh(){
    var sh_echarts = echarts.init(document.getElementById('map_echarts'));
    var datash=[
        {name:"崇明县",value:1},
        {name:"南汇区",value:1},
        {name:"奉贤区",value:1},
        {name:"浦东新区",value:323},
        {name:"金山区",value:1},
        {name:"青浦区",value:2},
        {name:"松江区",value:27},
        {name:"嘉定区",value:23},
        {name:"宝山区",value:8},
        {name:"闵行区",value:71},
        {name:"杨浦区",value:80},
        {name:"普陀区",value:55},
        {name:"徐汇区",value:180},
        {name:"长宁区",value:46},
        {name:"闸北区",value:1},
        {name:"虹口区",value:41},
        {name:"黄浦区",value:52},
        {name:"卢湾区",value:1},
        {name:"静安区",value:80}

    ];
    var  option = {
        title: {
            text: '全国旅游投诉',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['全国旅游投诉']
        },
        visualMap: {
            min: 0,
            max: 200,
            type:'continuous',
            left: 'left',
            top: 'bottom',
            maxOpen:true,
            showLabel:true,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            color:['#17bbff','#305aff']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '全国旅游投诉',
                type: 'map',
                mapType: '上海',
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:datash
            }
        ]
    };
    // myecharts.setOption(option)
    $.get('../AI/json/shanghai.json',function(getJson){
        sh_echarts.hideLoading();
        echarts.registerMap('110100',getJson);
        sh_echarts.setOption(option);
    })
}
//上海地图设置结束

//左上角的折线图开始设置
function drawline(content2){
    var line_echarts = echarts.init(document.getElementById('line_echarts'));
    var option = {
        title: {
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['专科','本科','硕士'],
            textStyle:{
                color:'white'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:['无工作经验','1年','2年','3-5年'],
            axisLabel:{
                color:'white'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color:'white'
            }
        },
        series: [
            {
                name:'专科',
                type:'line',
                stack: '专科',
                data:content2.data1,
                label:{
                    show:true,
                    color:"#17a5ff"
                },
                lineStyle:{
                    color:"#17a5ff"
                }
            },
            {
                name:'本科',
                type:'line',
                stack: '本科',
                data:content2.data2,
                label:{
                    show:true,
                    color:"#17a5ff"
                },
                lineStyle:{
                    color:"#46a9ff"
                }
            },
            {
                name:'硕士',
                type:'line',
                stack: '硕士',
                data:content2.data3,
                label:{
                    show:true,
                    color:"#17a5ff"

                },
                lineStyle:{
                    color:"#207cff"
                }
            }
        ]
    };
    line_echarts.setOption(option);
    //设置鼠标点击地图事件，点击获取指定的元素。
    line_echarts.on('click',function(bar_data){
        console.log(bar_data.name)
    })
}


//不同学历的占比情况设置开始
function drawpie(content4){
    var chart = Highcharts.chart('pie_echarts', {

        chart: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            polar: true,
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 1) +'%';
            }
        },
        colors:['#4de7ff',"#44a6ff",'#4272ff'],
        title: {
            text: ''
        },

        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45,
                dataLabels:{
                    distance:15,
                    formatter:function(){
                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
                    }
                }

            }
        },
        series: [{
            name: '占比情况',
            data:content4

        }]
    });
    // var pie_echarts = echarts.init(document.getElementById('pie_echarts'));
    // var option = {
    //     title : {
    //
    //     },
    //     color:['red', 'green','yellow'],
    //     tooltip : {
    //         trigger: 'item',
    //         formatter: "{a} <br/>{b} : {c} ({d}%)"
    //     },
    //     legend: {
    //         orient: 'vertical',
    //         left: 'left',
    //         data: ['专科','本科','硕士'],
    //         textStyle:{
    //             color:'white'
    //         }
    //     },
    //     series : [
    //         {
    //             name: '占比情况',
    //             type: 'pie',
    //             roseType:true,
    //             radius: ['20%', '60%'],
    //             data:content4,
    //             label:{
    //                 show:true,
    //                 color:'white',
    //                 formatter:'{b}:{d}%'
    //             },
    //             itemStyle: {
    //                 emphasis: {
    //                     shadowBlur: 10,
    //                     shadowOffsetX: 0,
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
    //                 }
    //             }
    //         }
    //     ]
    // };
    // pie_echarts.setOption(option)
}
//不同学历的占比情况设置结束
//不同公司类别对人工智能的需求关系设置开始
function drawfunnel(content5){

    var funnel_echarts = echarts.init(document.getElementById('funnel_echarts'));
    var option = {
        title: {

        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            show:false,
            data: ['上市公司','事业单位','创业公司','合资企业','国企','外资企业','民营企业']
        },
        series: [
            {
                name: '公司类别',
                type: 'funnel',
                left: '10%',
                width: '80%',
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data:content5,

            },
            {
                name: '公司类别',
                type: 'funnel',
                left: '10%',
                width: '80%',
                maxSize: '80%',
                label: {
                    normal: {
                        position: 'inside',
                        formatter: '{d}%',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        position:'inside',
                        formatter: '{b}: {d}%'
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                        borderColor: '#fff',
                        borderWidth: 2
                    }

                },
                data:content5
            }
        ]
    };
    funnel_echarts.setOption(option)
}
//不同公司类别对人工智能的需求关系设置结束


//不同省份、城市对于人工智能的的需求量柱状图设置开始
function drawbar(content6){
    var bar_echarts = echarts.init(document.getElementById('bar_echarts'));
    // var dataAxis = ['安徽', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁','山东','山西', '陕西', '四川', '云南', '浙江'];
    // var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220,110,110];
    var yMax = 50;
    var dataShadow = [];

    for (var i = 0; i < content6.data.length; i++) {
        dataShadow.push(yMax);
    }

    var option = {
        title: {
            text:'不同省份、城市对于人工智能人才的需求量',
         textStyle:{
                color:'white'
        }
        },
        // grid:{
        //     show:true,
        //     left:'10%',
        //     bottom:'35%'
        // },
        tooltip:{

        },
        xAxis: {
            data: content6.dataAxis,
            axisLabel: {
                interval:0,
                rotate:40,
                inside: false,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false,
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: content6.data,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'white'
                        }
                    }
                }
            }
        ]
    };

// Enable data zoom when user click bar.
    var zoomSize = 6;
    bar_echarts.on('click', function (params) {
        console.log(content6.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        bar_echarts.dispatchAction({
            type: 'dataZoom',
            startValue: content6.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: content6.dataAxis[Math.min(params.dataIndex + zoomSize / 2, content6.data.length - 1)]
        });
    });
    bar_echarts.setOption(option)
}
//不同省份、城市对于人工智能的的需求量柱状图设置结束
drawmap(data_province);
 drawgraph();
// drawbar();
