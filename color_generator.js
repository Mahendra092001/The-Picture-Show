
{
//You are about to see the random  bright color generator under construction
var R,G,B;
var a=Math.ceil(Math.random()*2);

if(a==1)
{
//b is the peaked color
var b=Math.ceil(Math.random()*3);//R is 1 G is 2 B is 3
if(b==1){R=Math.round(Math.random()*55)+200;G=Math.round(Math.random()*155);B=Math.round(Math.random()*155);}//red is peak
else if(b==2){R=Math.round(Math.random()*155);G=Math.round(Math.random()*55)+200;B=Math.round(Math.random()*155);}//green is peak
else{R=Math.round(Math.random()*155);G=Math.round(Math.random()*155);B=Math.round(Math.random()*55)+200;}//blue is peak
}
else 1
{
//b is the dip color
var b=Math.ceil(Math.random()*3);//R is 1 G is 2 B is 3
if(b==1){R=Math.round(Math.random()*155);G=Math.round(Math.random()*55)+200;B=Math.round(Math.random()*55)+200;}//red is dip
else if(b==2){R=Math.round(Math.random()*55)+200;G=Math.round(Math.random()*155);B=Math.round(Math.random()*55)+200;}//green is dip
else{R=Math.round(Math.random()*55)+200;G=Math.round(Math.random()*55)+200;B=Math.round(Math.random()*155);}//blue is dip

}
document.getElementById("lw").style.background="rgb("+R+","+G+","+B+")";
}
