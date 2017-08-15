var ctx_js = document.getElementById("map").getContext("2d");
$(function(){
    var ctx = ctx_js;
    $.ajax({
        url:'/getmapdata',
        method: 'GET',
        dataType:'json',
        success:function(data){
            console.log(data);
            // 解析并渲染数据
            //renderData(data);
        },
        error:function(err){
            console.log(err);
        }
    })
});

// 地图数据请求成功的回调函数
function renderData(data){
    var mapData = data[0];
    //首先将地图的背景画出来
    var mapsize = mapData.mapsize;
    // 在这里调用 绘制map背景的方法

    /*
    *console.log(datajson);
    *console.log(datajson.homequantity);
    * 获取对象中的数据 的方式
    *console.log(datajson.mapsize.height);
    * 获取数组中数据的方式
    *console.log(datajson.endy[0]);
    */
}