function ON(){
    document.getElementById('lampu').src='PIC2.gif';
}
function OFF(){
    document.getElementById('lampu').src='PIC1.gif';
}
function Destroy(){
    document.getElementById('tulisan').style.display='none';
}
function murup(){
    document.getElementById('tulisan').style.display='block';
}

var x,y,z;
x=10;
y="test";
z=x+y;
function Hitung(){
    window.alert(z);
}
var x = new Date(2012,12,12,21,21,12);
function Show_Tanggal(){
    document.getElementById("tulisan").innerHTML=x;
}

function input_show(){
    var teks=document.getElementById("mytext").value;
    document.getElementById("tampilkan").innerHTML=teks;
}