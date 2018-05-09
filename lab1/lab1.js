$(document).ready(function(){  
    function update(){
        let resolve = function(L,Alpha,Nyy){
            const lyy = L/Nyy;
            if(Alpha !== undefined){
                for(let i=0; i < Alpha.length; i++){
                 Alpha[i] = (Alpha[i] * lyy).toFixed(2);
                }
            }
            
            return {
                L:L,
                Alpha:Alpha,
                Nyy:Nyy,
                lyy:lyy
            }
        }
        let draw = function(){
            let boxWidth = $(".box").width();
            console.log("Box width: " + boxWidth);
            let ration = boxWidth/obj.L;
            let lr = (obj.L/obj.Nyy) * ration;

            $("#wire1").css({width:lr+'px'});
            $("#wire2").css({width:lr+'px'});
            $("#wire3").css({width:lr+'px'});
            $("#wire4").css({width:lr+'px'});
            console.log(lr+"px;");

            for(let i=0; i<obj.Alpha.length;i++)
                $("#A"+(i+1)).val(obj.Alpha[i]);
            $("#length1, #length2, #length3, #length4").html(obj.lyy+" км");
            $("#L").text(obj.L+" км");
            console.log(obj);
        }

        let obj = resolve($('#length').val(),
                            [
                                $('#a1').val(),
                                $('#a2').val(),
                                $('#a3').val(),
                                $('#a4').val()
                            ],
                            $('#number_station').val());
        draw();
    }

    update();
    $('#length,#a1,#a2,#a3,#a4').on("input", update);
});