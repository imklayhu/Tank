// 封装绘制 矩形的方法
function drawRectangle(ctx,mapsize){
    var fillStyle = mapsize.fillStyle;

    ctx.save(); // 作用是什么？
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.fillRect(startx,starty,endx,endy);
    ctx.closePath();
}

// 封装绘制线条的方法
function drawLine(){

}