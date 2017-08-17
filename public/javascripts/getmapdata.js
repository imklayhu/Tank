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
            ajaxGetTankData(data);
        },
        error:function(err){
            console.log(err);
        }
    });
});

// 地图数据请求成功的回调函数
function renderData(data){
    var mapData = data[0];
    
    var $mapbground = $("#map");
    drawBgMap($mapbground,mapData)
    // 在这里绘制tank home
    drawTankHome($mapbground,mapData);
    // 在这里调用绘制迷宫的函数
    drawMaze($mapbground,mapData);
}

// 解析迷宫的数据
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

// 封装绘制地图背景的方法
function drawBgMap(ctx,mapData){
    var mapsize = mapData.mapsize;
    drawRectangle(ctx,mapsize);
}

// 封装绘制敌我双方home的函数
function drawTankHome(ctx,mapData){
    var myhomeSize = mapData.mytankhome;
    var enhomeSize = mapData.entankhome;
    drawRectangle(ctx,myhomeSize);
    
    for(var a_enhome of enhomeSize){
        drawRectangle(ctx,a_enhome);
    }
}
// 封装绘制迷宫的函数
function drawMaze(ctx,mapData){
    mazeData(mapData);
    for(let i = 0;i < mazeData(mapData).startX.length;i++){
        var lineData = {
            strokeStyle: mazeData(mapData).strokeStyle,
            x1: mazeData(mapData).startX[i],
            y1: mazeData(mapData).startY[i],
            x2: mazeData(mapData).endX[i],
            y2: mazeData(mapData).endY[i]
        };
        drawLine(ctx,lineData);
    }
}
