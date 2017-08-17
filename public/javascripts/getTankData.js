function ajaxGetTankData(mapData){
    $.ajax({
        url:'/getTankData',
        method: 'GET',
        dataType:'json',
        success:function(data){
            // 解析并渲染数据
            renderTank(data,mapData);
        },
        error:function(err){
            console.log(err);
        }
    })
}

function renderTank(data,mapData){
    var $mapbground = $("#map");
    var mytankData = data[0];
    // console.log(data[0]);
    var tankData = transMytankData(mytankData);
    
    // 在这里调用绘制坦克的方法，绘制出我的坦克
    drawTank($mapbground,tankData);
    
    // 实例化坦克移动对象
    var tankMoveIntity = createTankMoveObject($mapbground,tankData,mapData);
    // 监听键盘事件动作，判断行动方向
    listenKeyboard(tankMoveIntity);
}
