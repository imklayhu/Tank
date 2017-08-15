/**
 * Created by Klay-Clam on 2017/8/15.
 */
// models/database/mytank.js
var mongoose = require('../db');
var Schema = mongoose.Schema;

var entankSchema = new Schema({
    bornseat: Boolean, // 出生的位置，true 代表 left,false 代表 right
    /*
     * const bodysize = {
     *   x: 100,
     *   y: 100,
     *   width: 50,
     *   height: 50
     * }
     * */
    bodysize: Object,
    direction: Number, // 坦克面向的方向
    gun: Object //炮筒的宽度、颜色 gun.width,gun.color
})
module.exports = mongoose.model('entank',entankSchema);