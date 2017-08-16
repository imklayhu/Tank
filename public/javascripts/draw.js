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
        fillStyle: '#36c',
        strokeStyle: '#f60',
        strokeWidth: 2,
        x: 100, y: 100,
        radius: 20,
        sides: 3,
        concavity: -0.5,
        rotate: 0
      });
}