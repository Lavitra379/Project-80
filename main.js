function getparagraph1(){
var inputs=[];
for (var i=1; i<=6 ; i++)
{
inputs.push(document.getElementById("p1i"+i).value)
}
inputs.join(". ");
document.getElementById("showpragraph1").innerHTML = inputs.join(". ");
}   

function getparagraph2(){
    var inputs=[];
    for (var i=1; i<=6 ; i++)
    {
    inputs.push(document.getElementById("p2i"+i).value)
    }
    inputs.join(". ");
    document.getElementById("showpragraph2").innerHTML = inputs.join(". ");
    }   