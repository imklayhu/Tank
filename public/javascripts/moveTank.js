// function tankMove(){
//     this.moveUp = function(){
//         console.log("move up");
//     }
// } 
function createTankMoveObject(ctx, tankData, mapData) {
    var m = new Object();
    //console.log(mapData["0"].mapsize.width);
    // m.mapData = mapData;

    //console.log(m.mapData);
    m.ctx = ctx; // canvas 对象
    m.tankData = tankData; // 坦克的数据
    m.speed = 2;
    // 向上移动的方法
    m.moveUp = function () {
        console.log("move up");
        // 方向向上
        this.tankData.rotate = 0;
        // 地图边缘检测 以及地图的墙壁检测
        //var rgbaup = getPixelRgba(x,y);
        if (this.tankData.y - this.tankData.radius < this.tankData.radius) {
            this.tankData.y = this.tankData.radius;
            console.log(this.tankData.x, this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        } else {
            // 墙壁检测
            // 判断语句，Boolean
            var Analyzing = (getPixelRgba(this.tankData.x, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)")||
                            (getPixelRgba(this.tankData.x - this.tankData.radius, this.tankData.y - this.tankData.radiu) == "rgba(102,102,102,1)")||
                            (getPixelRgba(this.tankData.x + this.tankData.radius, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)") ||
                            (getPixelRgba(this.tankData.x - this.tankData.radius/2, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)") ||
                            (getPixelRgba(this.tankData.x + this.tankData.radius/2, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)")||
                            (getPixelRgba(this.tankData.x - this.tankData.radius/4, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)") ||
                            (getPixelRgba(this.tankData.x + this.tankData.radius/4, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)")||
                            (getPixelRgba(this.tankData.x - this.tankData.radius/6, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)") ||
                            (getPixelRgba(this.tankData.x + this.tankData.radius/6, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)")||
                            (getPixelRgba(this.tankData.x - this.tankData.radius/8, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)") ||
                            (getPixelRgba(this.tankData.x + this.tankData.radius/8, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)")||
                            (getPixelRgba(this.tankData.x - this.tankData.radius/10, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)") ||
                            (getPixelRgba(this.tankData.x + this.tankData.radius/10, this.tankData.y - this.tankData.radius) == "rgba(102,102,102,1)");
            console.log(Analyzing);
            if (Analyzing) {
                this.tankData.y = this.tankData.y;
                console.log("遇到墙壁：" + this.tankData.x, this.tankData.y);

                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            } else {
                this.tankData.y = this.tankData.y - this.speed;
                console.log(this.tankData.x, this.tankData.y);
                //var rgba = getPixelRgba(this.tankData.x,this.tankData.y-this.tankData.radius-3);
                //console.log("rgba: "+rgba);
                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            }
        }
    };
    // 向右移动的方法
    m.moveRight = function () {
        console.log("move right");
        this.tankData.rotate = 90;

        // 地图边缘检测
        if (700 - this.tankData.x <= this.tankData.radius) {
            this.tankData.x = 700 - this.tankData.radius;
            console.log(this.tankData.x, this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        } else {
            if (getPixelRgba(this.tankData.x + this.tankData.radius + 4, this.tankData.y) == "rgba(102,102,102,1)") {
                this.tankData.x = this.tankData.x;
                console.log("遇到墙壁：" + this.tankData.x, this.tankData.y);

                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            } else {
                this.tankData.x = this.tankData.x + this.speed;
                console.log(this.tankData.x, this.tankData.y);
                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            }
        }
    }
    // 向下移动的方法
    m.moveDown = function () {
        console.log("move down");
        this.tankData.rotate = 180;
        // 边缘检测
        if (this.tankData.y + this.tankData.radius >= 500) {
            this.tankData.y = 500 - this.tankData.radius;

            console.log(this.tankData.x, this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        } else {
            if (getPixelRgba(this.tankData.x, this.tankData.y + this.tankData.radius + 4) == "rgba(102,102,102,1)") {
                this.tankData.y = this.tankData.y;
                console.log("遇到墙壁：" + this.tankData.x, this.tankData.y);

                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            }else{
                this.tankData.y = this.tankData.y + this.speed;
                console.log(this.tankData.x, this.tankData.y);
                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            }
        }
    }
    // 向左移动的方法
    m.moveLeft = function () {
        console.log("move left");
        this.tankData.rotate = 270;
        if (this.tankData.x - this.tankData.radius <= 0) {
            this.tankData.x = this.tankData.radius;
            console.log(this.tankData.x, this.tankData.y);
            // 坦克移动的时候重绘坦克和地图
            this.ctx.setLayer('moving', {
                visible: false
            }).drawLayers();
            renderData(mapData);
            drawTank(this.ctx, this.tankData);
        } else {
            if(getPixelRgba(this.tankData.x - this.tankData.radius - 4, this.tankData.y) == "rgba(102,102,102,1)"){
                this.tankData.x = this.tankData.x;
                console.log("遇到墙壁：" + this.tankData.x, this.tankData.y);

                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);

            }else{
                this.tankData.x = this.tankData.x - this.speed;
                console.log(this.tankData.x, this.tankData.y);
                // 坦克移动的时候重绘坦克和地图
                this.ctx.setLayer('moving', {
                    visible: false
                }).drawLayers();
                renderData(mapData);
                drawTank(this.ctx, this.tankData);
            }
        }
    }
    return m;
}

// 键盘按键监听
function listenKeyboard(tankMoveIntity) {
    $(document).keypress(function (event) {
        //console.log(event.keyCode);

        switch (event.keyCode) {
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


// 获取像素点的rgba值
function getPixelRgba(x, y, width = 5, height = 5) {
    // 获取画布
    var canvasObj = $("#map")[0].getContext('2d');
    // console.log("width,height:" + width + ",," + height )
    //
    var pixelData = canvasObj.getImageData(x, y, width, height).data;
    var rgba = 'rgba(' + pixelData[0] + ',' + pixelData[1] +
        ',' + pixelData[2] + ',' + (pixelData[3] / 255) + ')';

    return rgba;
}