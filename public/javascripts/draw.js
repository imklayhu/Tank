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
    // console.log(this);
}
/**
 * 封装Shooting对象
 * @param {*canvas#map} ctx 
 * @param {*bullet satus} bulletStatus 
 */
// function Shoot(ctx,bulletStatus){
function Shoot(ctx,bulletStatus,mapData,tankData){
    var S = new Object();
    S.bulletSpeed = 20;
    S.ctx = ctx;
    S.bulletStatus = bulletStatus;

    S.shootUp = function(){
        if(getPixelRgba(this.bulletStatus.x2,this.bulletStatus.y2) == "rgba(238,238,238,1)"){
            
            setInterval(() => {
                this.bulletStatus.y1 -= this.bulletSpeed;
                this.bulletStatus.y2 -= this.bulletSpeed;

                this.ctx.setLayer('shooting', {
                    visible: false
                }).drawLayers();

                renderData(mapData);
                drawTank(this.ctx, tankData);
                ctx.drawLine({
                    strokeStyle: bulletStatus.strokeStyle,
                    strokeWidth: 4,
                    x1:bulletStatus.x1,y1:bulletStatus.y1,
                    x2:bulletStatus.x2,y2:bulletStatus.y2
                });
            },800);
        }
    }
 
    S.shootRight = function () {
        if(getPixelRgba(this.bulletStatus.x2,this.bulletStatus.y2) == "rgba(238,238,238,1)"){
            
            setInterval(() => {
                this.bulletStatus.x1 += this.bulletSpeed;
                this.bulletStatus.x2 += this.bulletSpeed;

                this.ctx.setLayer('shooting', {
                    visible: false
                }).drawLayers();

                renderData(mapData);
                drawTank(this.ctx, tankData);
                ctx.drawLine({
                    strokeStyle: bulletStatus.strokeStyle,
                    strokeWidth: 4,
                    x1:bulletStatus.x1,y1:bulletStatus.y1,
                    x2:bulletStatus.x2,y2:bulletStatus.y2
                });
            },800);
        }
    }

    S.shootDown = function () {
        if(getPixelRgba(this.bulletStatus.x2,this.bulletStatus.y2) == "rgba(238,238,238,1)"){
            
            setInterval(() => {
                this.bulletStatus.y1 += this.bulletSpeed;
                this.bulletStatus.y2 += this.bulletSpeed;

                this.ctx.setLayer('shooting', {
                    visible: false
                }).drawLayers();

                renderData(mapData);
                drawTank(this.ctx, tankData);
                ctx.drawLine({
                    strokeStyle: bulletStatus.strokeStyle,
                    strokeWidth: 4,
                    x1:bulletStatus.x1,y1:bulletStatus.y1,
                    x2:bulletStatus.x2,y2:bulletStatus.y2
                });
            },800);
        }
    }

    S.shootLeft = function () {
        if(getPixelRgba(this.bulletStatus.x2,this.bulletStatus.y2) == "rgba(238,238,238,1)"){
            
            setInterval(() => {
                this.bulletStatus.x1 -= this.bulletSpeed;
                this.bulletStatus.x2 -= this.bulletSpeed;

                this.ctx.setLayer('shooting', {
                    visible: false
                }).drawLayers();

                renderData(mapData);
                drawTank(this.ctx, tankData);
                ctx.drawLine({
                    strokeStyle: bulletStatus.strokeStyle,
                    strokeWidth: 4,
                    x1:bulletStatus.x1,y1:bulletStatus.y1,
                    x2:bulletStatus.x2,y2:bulletStatus.y2
                });
            },800);
        }
    }
    return S;
}
/**
 * 还未封装之前的向上射击的事件
 * @param {*} ctx 
 * @param {*} bulletStatus 
 */
// function shootUp(ctx,bulletStatus){
//     console.log(ctx);
//     console.log(bulletStatus);
//     ctx.drawLine({
//         strokeStyle: bulletStatus.strokeStyle,
//         strokeWidth: 4,
//         x1:bulletStatus.x1,y1:bulletStatus.y1,
//         x2:bulletStatus.x2,y2:bulletStatus.y2
//     });
// }

// function bulletMove(ctx,rotate,bulletStatus,bulletSpeed = 6){
//     switch (rotate){
//         case 0:
//             shootUp(ctx,bulletStatus);
//             break;
//         case 90:
//             break;
//         case 180:
//             break;
//         case 270:
//             break;
//     }
// }
