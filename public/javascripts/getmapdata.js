$(function(){
    console.log("get it");
    $.ajax({
        url:'/getmapdata',
        method: 'GET',
        dataType:'json',
        success:function(data){
            console.log(data);
        },
        error:function(err){
            console.log(err);
        }
    })
});