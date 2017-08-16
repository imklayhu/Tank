$(function(){
    //var ctx = ctx_js;
    $.ajax({
        url:'/getmapdata',
        method: 'GET',
        dataType:'json',
        success:function(data){
            // 解析并渲染数据
            renderData(data);
            // 调用 渲染坦克的 函数
            ajaxGetTankData();
        },
        error:function(err){
            console.log(err);
        }
    });
});

// 地图数据请求成功的回调函数
function renderData(data){
    var mapData = data[0];
    //console.log(mapData);
    //首先将地图的背景画出来
    
    var $mapbground = $("#map");
    // 在这里调用 绘制map背景的方法
    var mapsize = mapData.mapsize;
    drawRectangle($mapbground,mapsize);
    // 在这里绘制tank home
    var myhomeSize = mapData.mytankhome;
    var enhomeSize = mapData.entankhome;
    drawRectangle($mapbground,myhomeSize);
    
    for(var a_enhome of enhomeSize){
        drawRectangle($mapbground,a_enhome);
    }
    // 在这里调用绘制迷宫的地图
    // 调用解析数据函数
    mazeData(mapData);
    for(let i = 0;i < mazeData(mapData).startX.length;i++){
        var lineData = {
            strokeStyle: mazeData(mapData).strokeStyle,
            x1: mazeData(mapData).startX[i],
            y1: mazeData(mapData).startY[i],
            x2: mazeData(mapData).endX[i],
            y2: mazeData(mapData).endY[i]
        };
        drawLine($mapbground,lineData);
    }

    // 在这里调用绘制我的坦克的方法
    //mytankData(mapData);
    
}

// 迷宫的数据的解析
function mazeData(mapData){
    var startX = mapData.startx;
    var startY = mapData.starty;
    var endX = mapData.endx;
    var endY = mapData.endy;
    var strokeStyle = mapData.strokeStyle;

    return {startX,startY,endX,endY,strokeStyle};
}

// 解析坦克的数据
function transMytankData(mytankData){
    var fillStyle = mytankData.fillStyle;
    var strokeStyle = mytankData.strokeStyle;
    var strokeWidth = mytankData.strokeWidth;
    var x = mytankData.x;
    var y = mytankData.y;
    var radius = mytankData.radius;
    var sides = mytankData.sides;
    var concavity = mytankData.concavity;
    var rotate = mytankData.rotate;

    return {
        fillStyle,
        strokeStyle,
        strokeWidth,
        x,
        y,
        radius,
        sides,
        concavity,
        rotate
    };
}