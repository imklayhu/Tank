// function tankMove(){
//     this.moveUp = function(){
//         console.log("move up");
//     }
// }
function createTankMoveObject(ctx,tankData){
    var m = new Object();

    m.ctx = ctx; // canvas 对象
    m.tankData = tankData; // 坦克的数据
    m.speed = 2;
    // 向上移动的方法
    m.moveUp = function(){
        console.log("move up");
        //console.log(this.speed);
        var oldTankData = this.tankData;
        this.tankData.y = this.tankData.y - this.speed;
        this.tankData.rotate = 0;
        console.log(this.tankData.y);
        this.ctx.setLayer('moving',{
            visible: false
        }).drawLayers();
        
        drawTank(this.ctx,this.tankData);
    };
    // 向右移动的方法
    m.moveRight = function(){
        console.log("move right");
        this.tankData.rotate = 90;
        drawTank(this.ctx,this.tankData)
    }
    // 向下移动的方法
    m.moveDown = function(){
        console.log("move down");
        this.tankData.rotate = 180;
        drawTank(this.ctx,this.tankData)
    }
    // 向左移动的方法
    m.moveLeft = function(){
        console.log("move left");
        this.tankData.rotate = 270;
        drawTank(this.ctx,this.tankData)
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
