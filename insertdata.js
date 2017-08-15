/**
 * Created by Klay-Clam on 2017/8/15.
 */
var easymap = require('./models/database/map.easy')
var mytank = require('./models/database/mytank')
var entank = require('./models/database/entank')

var easy_map = new easymap({
    mapsize: {
        startx: 0,
        starty: 0,
        width: 700,
        height: 500
    },
    homequantity: 3,
    startx: [0,100,100,100,200,200,200,200,300,400,500,500,400,600,600,500,500,500],
    starty: [100,100,300,400,400,0,150,200,300,300,0,150,200,100,100,300,400,400],
    endx: [100,100,200,200,200,200,200,300,300,400,500,500,500,700,600,600,600,500],
    endy: [100,300,300,400,500,100,250,200,450,450,100,250,200,100,300,300,400,500],
    entankhome:{
        whose: false,
        startx: 0,
        starty: 0,
        width: 50,
        height: 50,
        Color: '#ee301e'
    },
    mytankhome:{
        whose: true,
        startx: 325,
        starty: 450,
        width: 50,
        height: 50,
        Color: '#2ee6ee'
    }
});

var mytank_data = new mytank({
    bornseat: true,
    bodysize: {
        x:330,
        y:455,
        width:40,
        height:45
    },
    direction:0,
    // 决定删除 gun 的位置的数据通过主体的计算得到，再来渲染。
    gun:{
        width: 5,
        color:'#ee301e'
    }
});

var entank_right = new entank({
    bornseat: false, //
    bodysize: {
        x:655,
        y:0,
        width:40,
        height:45
    },
    direction:2,
    // 决定删除 gun 的位置的数据通过主体的计算得到，再来渲染。
    gun:{
        width: 5,
        color:'#ee301e'
    }
});

var entank_left = new entank({
    bornseat: true, //
    bodysize: {
        x:5,
        y:0,
        width:40,
        height:45
    },
    direction:2,
    // 决定删除 gun 的位置的数据通过主体的计算得到，再来渲染。
    gun:{
        width: 5,
        color:'#ee301e'
    }
});

const entanks = [];
entanks.push(entank_left);
entanks.push(entank_right);

mytank.collection.insert(mytank_data,function (err,result) {
    if(err){
        console.log("insert error: "+err);
    }else{
        console.log(result);
    }
})