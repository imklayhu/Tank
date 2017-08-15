/**
 * Created by clam on 17-3-14.
 */
window.onload = function () {

    getTankData();
    var mapPanel = document.getElementById('map');
    var ctx = mapPanel.getContext("2d");
};
// 加载坦克
function loadTank(ctx,number) {
    var identity = "myself"; // myself enemy
    drawTank(ctx,identity,number);
}

// 画出坦克
function drawTank(ctx,tankType,myTankData,enTankData,position) {

    if( tankType !== 0){
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
        ctx.moveTo(myTankData[1][0],myTankData[1][1]);
        ctx.lineTo(myTankData[1][2],myTankData[1][3]);
        ctx.stroke();
        ctx.closePath();
    }else{
        if(!position){
            // 画出坦克主体  left
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#e6ee2a';
            ctx.fillRect(enTankData[0].left.x,enTankData[0].left.y,enTankData[0].left.width,enTankData[0].left.height);
            ctx.closePath();
            // 画出炮筒
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.moveTo(enTankData[1][0][0],enTankData[1][0][1]);
            ctx.lineTo(enTankData[1][0][2],enTankData[1][0][3]);
            ctx.stroke();
            ctx.closePath();
        } else{
            // 画出坦克主体  right
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#e6ee2a';
            ctx.fillRect(enTankData[0].right.x,enTankData[0].right.y,enTankData[0].right.width,enTankData[0].right.height);
            ctx.closePath();
            // 画出炮筒
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.moveTo(enTankData[1][1][0],enTankData[1][1][1]);
            ctx.lineTo(enTankData[1][1][2],enTankData[1][1][3]);
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

    // draw enemy's Home
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