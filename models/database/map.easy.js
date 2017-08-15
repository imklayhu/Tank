/**
 * Created by Klay-Clam on 2017/8/15.
 */
// models/database/map.easy.js
var mongoose = require('../db');
var Schema = mongoose.Schema;

var easymapSchema = new Schema({
    mapsize: Object, //地图尺寸
    homequantity: Number, // 产生坦克的home的数量，其中自己的tank产生的位置恒定，且数量为 1；在这个版本中，敌人tank的home为 2
    startx: Array, // 地图迷宫横线、竖线 开始的绘制的点的 横坐标
    starty: Array, // 地图迷宫横线、竖线 开始的绘制的点的 纵坐标
    endx: Array, // 地图迷宫横线、竖线 结束的绘制的点的 横坐标
    endy: Array, // 地图迷宫横线、竖线 结束的绘制的点的 纵坐标
    /*
     * 数据形式：Object
     * const tankHome = {
     *   whose: Boolean,
     *   startx: Number,
     *   starty: Number,
     *   endx: Number,
     *   endy: Number,
     *   Color: String
     * }
     *
     * 示例数据：
     * const tankHome = {
     *   whose: 1,
     *   startx: 0,
     *   starty:0,
     *   endx: 100,
     *   endy: 100,
     *   Color: "#ee301e"
     * }
     * */
    entankhome: Object,
    mytankhome: Object
})
module.exports = mongoose.model('easymap',easymapSchema);