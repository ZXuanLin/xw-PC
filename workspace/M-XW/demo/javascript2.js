$(function(){
    $("table tr:nth-child(odd)").css("background-color","#eee");
    $("#cheAll").click(function(){
        if(this.checked){
            $("table tr td input[type=checkbox]").prop("checked",true);
        }else{
            $("table tr td input[type=checkbox]").prop("checked",false);
        }
    })
    
    $("#delbtn").click(function(){
        var inl = $("table tr td input:checked:not('#cheAll')").length;
        if(inl != 0){
            $("table tr td input[type=checkbox]:not('#cheAll')").each(function(index){
                if(this.checked){
                    $("table tr[id="+this.value+"]").remove();
                }
            })
        }
    })
    var x=5; var y=15;
    $("table tr td img").mouseover(function(e){
        $("#imgtop").attr("src",this.src)
        .css({
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"
        })
        .show(100);
    })
    $("table tr td img").mouseout(function(e){
        $("#imgtop").hide();
    })
})