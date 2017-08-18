// function tankMove(){
//     this.moveUp = function(){
//         console.log("move up");
//     }
// }
function createTankMoveObject(ctx,tankData,mapData){
    var m = new Object();
    //console.log(mapData["0"].mapsize.width);
    // m.mapData = mapData;
    //console.log(m.mapData);
    m.ctx = ctx; // canvas 对象
    m.tankData = tankData; // 坦克的数据
    m.speed = 4;
    // 向上移动的方法
    m.moveUp = function(){
        console.log("move up");

        // 方向向上
        this.tankData.rotate = 0;
        // 地图边缘检测
        if(this.tankData.y - this.tankData.radius < this.tankData.radius){
            this.tankData.y = this.tankData.radius;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        }else{
            this.tankData.y = this.tankData.y - this.speed;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving',{
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx,this.tankData);
        }
    };
    // 向右移动的方法
    m.moveRight = function(){
        console.log("move right");
        this.tankData.rotate = 90;

        // 地图边缘检测
        if(700 - this.tankData.x <= this.tankData.radius){
            this.tankData.x = 700-this.tankData.radius;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        }else{
            this.tankData.x = this.tankData.x + this.speed;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving',{
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx,this.tankData);
        }
    }
    // 向下移动的方法
    m.moveDown = function(){
        console.log("move down");
        this.tankData.rotate = 180;
        // 边缘检测
        if (this.tankData.y + this.tankData.radius >= 500) {
            this.tankData.y = 500 - this.tankData.radius;

            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        } else {
            this.tankData.y = this.tankData.y + this.speed;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        }
    }
    // 向左移动的方法
    m.moveLeft = function(){
        console.log("move left");
        this.tankData.rotate = 270;
        if (this.tankData.x - this.tankData.radius <= 0) {
            this.tankData.x = this.tankData.radius;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        } else {
            this.tankData.x = this.tankData.x - this.speed;
            console.log(this.tankData.x,this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        }
    }
    return m;
}

// 键盘按键监听
function listenKeyboard(tankMoveIntity){
    $(document).keypress(function(event){
        //console.log(event.keyCode);
    
        switch(event.keyCode){
            case 97: // LEFT
                tankMoveIntity.moveLeft();
                break;
            case 119: // UP
                tankMoveIntity.moveUp();
                break;
            case 100: // RIGHT
                tankMoveIntity.moveRight();
                break;
            case 115: // DOWN
                tankMoveIntity.moveDown();
                break;
            default:
                return;
        }
    })
}
