var hex, dia, rad, dur, x, y, endless, res;
var isHex, prevres, halfw, halfh;



function magic(){
    hex = document.getElementById("colorInput").value;
    dia = parseInt(document.getElementById("radInput").value) * 2;
    rad = parseInt(document.getElementById("radInput").value);
    dur = parseInt(document.getElementById("durInput").value);
    x = parseInt(document.getElementById("xInput").value);
    y = parseInt(document.getElementById("yInput").value);
    endless = document.getElementById('infiniteCheck').checked;
    halfw = document.getElementById("prev").offsetWidth/2;
    halfh = document.getElementById("prev").offsetHeight/2;
    isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test('#' + hex    );
    
    
    if (isHex){
        res = "@keyframes generated{\n   0%{\n      width: 0px;\n      height: 0px;\n      opacity: 1;\n      top: " + y + "px;\n      left: " + x + "px;\n   }\n   100%{\n      width: " + dia + "px;\n      height: " + dia + "px;\n      opacity: 0;\n      top: " + (y - rad) + "px;\n      left: " + (x - rad) + "px;\n   }\n}\n\n#shockwave{\n   position: fixed;\n   top: -9999px;\n   left: -9999px;\n   width: " + dia + "px;\n   height: " + dia + "px;\n   border-radius: " + dia + "px;\n   background-color: #" + hex + ";\n   animation: generated " + dur + "s";
        
        
        prevres = "@keyframes generated{\n   0%{\n      width: 0px;\n      height: 0px;\n      opacity: 1;\n      top: " + halfh + "px;\n      left: " + halfw + "px;\n   }\n   100%{\n      width: " + dia + "px;\n      height: " + dia + "px;\n      opacity: 0;\n      top: " + (halfh - rad) + "px;\n      left: " + (halfw - rad) + "px;\n   }\n}\n\n#shockwave{\n   position: relative;\n   top: -9999px;\n   left: -9999px;\n   width: " + dia + "px;\n   height: " + dia + "px;\n   border-radius: " + dia + "px;\n   background-color: #" + hex + ";\n   animation: generated " + dur + "s";
        
        
        if(endless){
            res += " infinite;\n}";
            prevres += " infinite;\n}";
        }else{
            res += ";\n}"
            prevres += ";\n}"
        }

        var pre = document.getElementById('shockwave');
        var preStyle = document.getElementsByTagName('style')[0];
        preStyle.innerHTML = prevres;
    }else{
        res = "Invalid hex code!";
    }   

    document.getElementById("codeResult").value = res;
    
}
/*
@keyframes example {
    0%{
      width: 1px;
      height: 1px;
      opacity: 1;
    }
    100%{
      width: 190px;
      height: 190px;
      opacity: 0;
      top: 95px;
      left: -45px;
    }
}

.xd {
    position: fixed;
    top: 190px;
    left: 50px;
    width: 190px;
    height: 190px;
    border-radius: 125px;
    background-color: red;
    animation: example 1s infinite;
}
*/
