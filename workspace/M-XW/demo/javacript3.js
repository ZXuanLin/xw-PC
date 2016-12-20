$(function(){
    function int(obj){
        return $(obj).html("<option>请选择</option>");
    }
    var data ={
        productor1:{A:'a,b,c',B:'e,f,g'},
        productor2:{C:'a,b,c',D:'e,f,g'},
        productor3:{E:'a,b,c',F:'e,f,g'}
    };
$.each(data,function(pf){
    $("#f").append("<option>"+pf+"</option>");})
    $("#f").change(function(){
        int("#b");
        int("#c");
        $.each(data,function(pf,ps){
            if($("#f option:selected").text()==pf){
                $.each(ps,function(pb,pc){
                    $("#b").append("<option>"+pb+"</option>");
                })
            $("#b").change(function(){
                int("#c");
                $.each(ps,function(pb,pc){
                    if($("#b option:selected").text()==pb){
                            $.each(pc.split(","),function(){
                            $("#c").append("<option>"+this+"</option>");
                        })
                    }
             })
            }) 
            }
        })
    })
    $("#btn").click(function(){
        var str = "你选择的厂商是：";
        str +=$("#f option:selected").text();
        str +="&nbsp;你选择的品牌：";
        str += $("#b option:selected").text();
        str +="&nbsp;你选择的型号：";
        str += $("#c option:selected").text();
        $(".sum").show().addClass('sum2').html(str);
    })

})