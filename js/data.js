/**
 * Created by clam on 17-3-14.
 */
function getTankData() {
    var request = new XMLHttpRequest();
    request.open("get","data/data.json",true);
    request.send();
    request.onreadystatechange = function () {
        if(request.readyState === 4 && request.status === 200){
            var response = JSON.parse( request.response,function (key,value) {
                return value;
            });
            var myTankGun = [
                response.myTankBody.x + (response.myTankBody.width)/2,
                response.myTankBody.y + 5,
                response.myTankBody.x  + response.myTankBody.width/2,
                response.myTankBody.y -5
            ];
            var enTanksGun = [
                [
                    response.enTankBody.left.x + response.enTankBody.left.width/2,
                    response.enTankBody.left.height - 5,
                    response.enTankBody.left.x + response.enTankBody.left.width/2,
                    response.enTankBody.left.height + 5
                ],
                [
                    response.enTankBody.right.x + response.enTankBody.right.width/2,
                    response.enTankBody.right.height - 5,
                    response.enTankBody.right.x + response.enTankBody.right.width/2,
                    response.enTankBody.right.height + 5
                ]
           ];
            // 绘制地图需要的参数
            var difficulty = [
                response.difficulty.easy,
                response.difficulty.difficult
            ];

            // 绘制坦克需要的参数
            var position = [
                response.position.left,
                response.position.right
            ];
            var tankType = response.tankType;
            var myTankData = [
                response.myTankBody,
                myTankGun
            ];
            var enTankData = [
                response.enTankBody,
                enTanksGun
            ];

            // 调用绘制地图的函数
            loadMap(ctx,difficulty[0]);

            // 调用绘制坦克的函数
            drawTank(ctx,tankType,myTankData,enTankData,position[0]);
            console.log(response.enTankBody);
        }
    };
}