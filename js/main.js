/**
 * Created by clam on 17-3-14.
 */
window.onload = function () {
    var mapPanel = document.getElementById('map');
    var ctx = mapPanel.getContext("2d");
    loadMap(ctx,difficulty.easy);
    drawTank(ctx);
};
// 加载坦克
function loadTank(ctx,number) {
    var identity = "myself"; // myself enemy
    drawTank(ctx,identity,number);
}

// 画出坦克
function drawTank(ctx,tankType,myTankData,enTanksData) {

    if( tankType === 0){
        // 画出坦克主体
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#2f2dee';
        ctx.fillRect(myTankData[0].x,myTankData[0].y,myTankData[0].width,myTankData[0].height);
        ctx.closePath();
        // 画出炮筒
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#ee301e';
        ctx.lineWidth = 5;
        ctx.moveTo(myTankData[1].startX,myTankData[1].startY);
        ctx.lineTo(myTankData[1].endX,myTankData[1].endY);
        ctx.stroke();
        ctx.closePath();
    }else{
        var position = 0; //判断位置变量，如果是 0 ，在地图的左上角产生坦克，反之，在右上角产生。
        if(position){
            // 定义 enemy 敌人的坦克的数据
            var x = 655;
            var y = 0;
            var width = 40;
            var height = 45;
            // 定义 弹筒的数据
            var startX = x + width/2;
            var startY = height-5;
            var endX = x + width/2;
            var endY = height  + 5;

            // 画出坦克主体
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#e6ee2a';
            ctx.fillRect(x,y,width,height);
            ctx.closePath();
            // 画出炮筒
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.moveTo(startX,startY);
            ctx.lineTo(endX,endY);
            ctx.stroke();
            ctx.closePath();
        } else{
            // 定义 enemy 敌人的坦克的数据
            var x = 5;
            var y = 0;
            var width = 40;
            var height = 45;
            // 定义 弹筒的数据
            var startX = x + width/2;
            var startY = height-5;
            var endX = x + width/2;
            var endY = height  + 5;

            // 画出坦克主体
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#e6ee2a';
            ctx.fillRect(x,y,width,height);
            ctx.closePath();
            // 画出炮筒
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.moveTo(startX,startY);
            ctx.lineTo(endX,endY);
            ctx.stroke();
            ctx.closePath();
        }
    }
}





// 加载指定难度的地图
function loadMap(ctx,difficulty) {
    switch (difficulty){
        case 0:
            //加载easy模式的map
            drawEasyMap(ctx);
            break;
        case 1:
            //加载Difficult模式的map
            break;
    }
}

// 画出简单模式的地图
function drawEasyMap(ctx) {


    ctx.beginPath();
    ctx.fillStyle = '#EEEEEE';
    ctx.fillRect(0,0,700,500);
    ctx.closePath();

    // draw my tank's Home
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#2ee6ee';
    ctx.fillRect(325,450,50,50);
    ctx.closePath();

    // draw enemy' Home
    // [1]
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#ee301e';
    ctx.fillRect(0,0,50,50);
    ctx.closePath();
    // [2]
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#ee301e';
    ctx.fillRect(650,0,50,50);
    ctx.closePath();
    // 画迷宫
    // 右半边
    //[1]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#666666';
    ctx.moveTo(0,100);
    ctx.lineTo(100,100);
    ctx.stroke();
    ctx.closePath();
    //[2]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(100,100);
    ctx.lineTo(100,300);
    ctx.stroke();
    ctx.closePath();
    //[3]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(100,300);
    ctx.lineTo(200,300);
    ctx.stroke();
    ctx.closePath();
    //[4]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(100,400);
    ctx.lineTo(200,400);
    ctx.stroke();
    ctx.closePath();
    //[5]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(200,400);
    ctx.lineTo(200,500);
    ctx.stroke();
    ctx.closePath();
    //[6]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(200,0);
    ctx.lineTo(200,100);
    ctx.stroke();
    ctx.closePath();
    //[7]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(200,150);
    ctx.lineTo(200,250);
    ctx.stroke();
    ctx.closePath();
    //[8]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(200,200);
    ctx.lineTo(300,200);
    ctx.stroke();
    ctx.closePath();
    //[9]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(300,300);
    ctx.lineTo(300,450);
    ctx.stroke();
    ctx.closePath();

    // 右半边
    //[1]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(400,300);
    ctx.lineTo(400,450);
    ctx.stroke();
    ctx.closePath();
    //[2]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(500,0);
    ctx.lineTo(500,100);
    ctx.stroke();
    ctx.closePath();
    //[3]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(500,150);
    ctx.lineTo(500,250);
    ctx.stroke();
    ctx.closePath();
    //[4]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(400,200);
    ctx.lineTo(500,200);
    ctx.stroke();
    ctx.closePath();
    //[5]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(600,100);
    ctx.lineTo(700,100);
    ctx.stroke();
    ctx.closePath();
    //[6]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(600,100);
    ctx.lineTo(600,300);
    ctx.stroke();
    ctx.closePath();
    //[7]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(500,300);
    ctx.lineTo(600,300);
    ctx.stroke();
    ctx.closePath();
    //[8]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(500,400);
    ctx.lineTo(600,400);
    ctx.stroke();
    ctx.closePath();
    //[8]
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    //ctx.strokeStyle = '#666666';
    ctx.moveTo(500,400);
    ctx.lineTo(500,500);
    ctx.stroke();
    ctx.closePath();



}