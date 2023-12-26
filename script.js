const display=document.queryselector("#display");

function designate(a){
    display.innerText+= a;
}


function del(){
    var war = display.innerText;
    display.innerText= war.substring(0, war.length-1);
}


function ac(){
    display.innerText = "";
}


function equal(){
   display.innerText= eval(display.innerText);
}

function sqrt(){

    var qwerty =display.innerText;

    var store = Math.sqrt(qwerty);
    display.innerText = store;
}

  



function rad(){
    var radian = display.innerText;
    var radia = (radian*180)/3.14;
    display.innerText = radia;
}

function square(){
    var squared = display.innerText;
    var redeeemd = Math.pow(squared,2);
    display.innerText = redeeemd;
}

function logarithm(){
    var logarit = display.innerText;
    var legit = Math.log10(logarit);
    display.innerText= legit;
}

function lan(){
    var logarit = display.innerText;
    var legit = Math.log(logarit);
    display.innerText = legit;
}

function pi(){
    var pai = display.innerText;
    var paai = pai * 3.141;
    display.innerText= paai;
}

function sine(){
    var trignometry = display.innerText;
    var result = Math.sin(trignometry);
    display.innerText= result;

}

function cos(){
    var trignometry = display.innerText;
    var result = Math.cos(trignometry);
    display.innerText= result;
    
}
function tan(){
    var trignometry = display.innerText;
    var result = Math.tan(trignometry);
    display.innerText= result;
    
}
function asine(){
    var trignometry = display.innerText;
    var result = Math.asin(trignometry);
    display.innerText= result;

}

function acos(){
    var trignometry = display.innerText;
    var result = Math.acos(trignometry);
    display.innerText= result;
    
}
function atan(){
    var trignometry = display.innerText;
    var result = Math.atan(trignometry);
    display.innerText= result;
    
}
