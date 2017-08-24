// 封装绘制 矩形的方法
function drawRectangle(ctx,rectsize){
    ctx.drawRect({
        fillStyle: rectsize.fillStyle,
        x: rectsize.startx, y: rectsize.starty,
        width: rectsize.width,
        height: rectsize.height,
        fromCenter: false
    })
}

// 封装绘制线条的方法
function drawLine(ctx,lineData){
    ctx.drawLine({
        strokeStyle: lineData.strokeStyle,
        strokeWidth: 5,
        x1: lineData.x1, y1: lineData.y1,
        x2: lineData.x2, y2: lineData.y2
      });
}

// 封装绘制坦克的方法
function drawTank(ctx,tankData){
    ctx.drawPolygon({
        fillStyle: tankData.fillStyle,
        strokeStyle: tankData.strokeStyle,
        strokeWidth: tankData.strokeWidth,
        x: tankData.x, y: tankData.y,
        radius: tankData.radius,
        sides: tankData.sides,
        concavity: tankData.concavity,
        rotate: tankData.rotate
    });
    console.log(this);
}
/**
 * 封装Shooting对象
 * @param {*canvas#map} ctx 
 * @param {*bullet satus} bulletStatus 
 */
function Shoot(ctx,bulletStatus){
    var S = new Object();

    S.ctx = ctx;
    S.bulletStatus = bulletStatus;

    S.shootUp = function(){

    }
}
function shootUp(ctx,bulletStatus){
    console.log(ctx);
    console.log(bulletStatus);
    ctx.drawLine({
        strokeStyle: bulletStatus.strokeStyle,
        strokeWidth: 4,
        x1:bulletStatus.x1,y1:bulletStatus.y1,
        x2:bulletStatus.x2,y2:bulletStatus.y2
    });
}

function bulletMove(ctx,rotate,bulletStatus,bulletSpeed = 6){
    switch (rotate){
        case 0:
            shootUp(ctx,bulletStatus);
            break;
        case 90:
            break;
        case 180:
            break;
        case 270:
            break;
    }
}
