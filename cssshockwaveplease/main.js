var hex, dia, rad, dur, x, y, endless, res;
var isHex;



function magic(){
    hex = document.getElementById("colorInput").value;
    dia = parseInt(document.getElementById("radInput").value) * 2;
    rad = parseInt(document.getElementById("radInput").value);
    dur = parseInt(document.getElementById("durInput").value);
    x = parseInt(document.getElementById("xInput").value);
    y = parseInt(document.getElementById("yInput").value);
    endless = document.getElementById('infiniteCheck').checked;
    isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test('#' + hex    );
    
    if (isHex){
        res = "@keyframes generated{\n   0%{\n      width: 0px;\n      height: 0px;\n      opacity: 1;\n      top: " + y + "px;\n      left: " + x + "px;\n   }\n   100%{\n      width: " + dia + "px;\n      height: " + dia + "px;\n      opacity: 0;\n      top: " + (y - rad) + "px;\n      left: " + (x - rad) + "px;\n   }\n}\n\n#shockwave{\n   position: relative;\n   top: -9999px;\n   left: -9999px;\n   width: " + dia + "px;\n   height: " + dia + "px;\n   border-radius: " + dia + "px;\n   background-color: #" + hex + ";\n   animation: generated " + dur + "s";
    
        if(endless){
            res += " infinite;\n}";
        }else{
            res += ";\n}"
        }

        var pre = document.getElementById('shockwave');
        var preStyle = document.getElementsByTagName('style')[0];
        preStyle.innerHTML = res;
    }else{
        res = "Invalid hex code!";
    }   

    document.getElementById("codeResult").value = res;
    
}
