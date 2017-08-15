/**
 * Created by Klay-Clam on 2017/8/15.
 */
// models/database/mytank.js
var mongoose = require('../db');
var Schema = mongoose.Schema;

var mytankSchema = new Schema({
    bornseat: Boolean, // 出生的位置，0 代表自己家
    /*
    * const bodysize = {
    *   x: 100,
    *   y: 100,
    *   width: 50,
    *   height: 50,
    *   color: ""
    * }
    * */
    bodysize: Object,
    direction: Number, // 坦克面向的方向,顺时针 上（0）右（1）下（2）左（3） 
    gun: Object //炮筒的宽度、颜色 gun.width,gun.color
    // 决定删除 gun 的位置的数据通过主体的计算得到，再来渲染。
})
module.exports = mongoose.model('mytank',mytankSchema);