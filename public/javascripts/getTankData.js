function ajaxGetTankData(){
    $.ajax({
        url:'/getTankData',
        method: 'GET',
        dataType:'json',
        success:function(data){
            // 解析并渲染数据
            renderTank(data);
        },
        error:function(err){
            console.log(err);
        }
    })
}

function renderTank(data){
    var $mapbground = $("#map");
    var mytankData = data[0];
    // console.log(data[0]);
    var tankData = transMytankData(mytankData);
    drawTank($mapbground,tankData);
}