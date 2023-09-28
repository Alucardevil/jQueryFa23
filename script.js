$(document).ready(
   $("button").click(function(){
        if($("h1").css("color") != "rgb(80, 200, 120)"){
                console.log("You did it!!");
            }
        else{
            $("h1").css("color", "#000000");
        } 
   })
);