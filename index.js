
//bai 1
document.getElementById("click").onclick=function(){
    let ngay=+document.getElementById("ngay").value;
    let thang=+document.getElementById("thang").value;
    let nam=+document.getElementById("nam").value;
  if(ngay==31 && (thang==1 || thang==3 || thang==5 || thang==7 || thang==8|| thang==10))
  {
    ngay=1;
    thang=thang+1;
   
  }
 else if(ngay==30 &&(thang==4||thang==6||thang==9||thang==11))
  {
    ngay=1;
    thang=thang+1;
   
  }
  else if(ngay==28 && thang==2)
  {
    thang=thang+1;
    ngay=1;
   
  }
  else if(ngay==31 && thang==12)
  {
    ngay=1;

    thang=1;
    nam=nam+1;
    
  }
  else if((ngay>=1 && ngay<=30))
  {
    ngay=ngay+1;
  }
  
  document.getElementById("wrapper-result").style.display="block";
  document.getElementById("result").innerHTML="ngày " + ngay  + " tháng " + thang + "  năm " + nam;
}


//bai 2
document.getElementById("play").onclick=function
(){
  let thang=+document.getElementById("month").value;
  let nam=+document.getElementById("year").value;
  let ngay=+0;
  if((thang==1 || thang==3 || thang==5 || thang==7 || thang==8|| thang==10||thang==12))
  {
    ngay=31;
  }
  else if((thang==4||thang==6||thang==9||thang==11))
  {
    ngay=30;
  }
  else if(thang==2&& (nam%4==0))
  {
    ngay=29;
  }
  else if(thang==2 && nam%4!=0)

  {
    ngay=28;
  }
  document.getElementById("result-wra").style.display="block";
  document.getElementById("show").innerHTML="có " + ngay +" ngày"
}





//bài 3
document.getElementById("button").onclick=function(){
let number=+document.getElementById("number").value;
let tram="";
let chuc="";
let donvi="";
if(number%100==1)
{
  tram="một trăm"
}
else if(Math.floor(number/100)==2)
{
  tram="hai trăm"
}
else if(Math.floor(number/100)==3)
{
  tram="ba trăm"
}
else if(Math.floor(number/100)==4)
{
  tram="bốn trăm"
}
else if(Math.floor(number/100)%100==5)
{
  tram="năm trăm"
}
else if(Math.floor(number/100)==6)
{
  tram="sáu trăm"
}
else if(Math.floor(number/100)==7)
{
  tram="bảy trăm"
}
else if(Math.floor(number/100)==8)
{
  tram="tám trăm"
}
else if(Math.floor(number/100)==9)
{
  tram="chín trăm"
}

if(Math.floor((number%100)/10)==1)
{
  chuc= "mười"
}
else if(Math.floor((number%100)/10)==2)
{
  chuc= "hai mươi"
}
else if(Math.floor((number%100)/10)==3)
{
  chuc= "ba mươi"
}
else if(Math.floor((number%100)/10)==4)
{
  chuc= "bốn mươi"
}
else if(Math.floor((number%100)/10)==5)
{
  chuc= "năm mươi"
}
else if(Math.floor((number%100)/10)==6)
{
  chuc= "sáu mươi"
}
else if(Math.floor((number%100)/10)==7)
{
  chuc= "bảy mươi"
}
else if(Math.floor((number%100)/10)==8)
{
  chuc= "tám mươi"
}
else if(Math.floor((number%100)/10)==9)
{
  chuc= "chín mươi"
}
if(number%10==1&& Math.floor((number%100)/10)>=2)
{
  donvi="mốt"
}
else if(number%10==1 &&Math.floor((number%100)/10)==1 )
{
  donvi="một"
}
else if(number%10==2)
{
  donvi="hai"
}
else if(number%10==3)
{
  donvi="ba"
}
else if(number%10==4)
{
  donvi="bốn"
}
else if(number%10==5)
{
  donvi="năm"
}
else if(number%10==6)
{
  donvi="sáu"
}
else if(number%10==7)
{
  donvi="bảy"
}
else if(number%10==8)
{
  donvi="tám"
}
else if(number%10==9)
{
  donvi="chín"
}
document.getElementById("result-wr").style.display="block"
document.getElementById("magic").innerHTML=tram +" " + chuc + " "+ donvi
}
console.log((521%100)/10);


//bài 4
document.getElementById("played").onclick=function(){
  let sv1=document.getElementById("sv1").value;
  let sv2=document.getElementById("sv2").value;
  let sv3=document.getElementById("sv3").value;
  let x1=+document.getElementById("x1").value;
  let x2=+document.getElementById("x2").value;
  let x3=+document.getElementById("x3").value;
  let y1=+document.getElementById("y1").value;
  let y2=+document.getElementById("y2").value;
  let y3=+document.getElementById("y3").value;
  let y4=+document.getElementById("y4").value;
  let x4=+document.getElementById("x4").value;
  let distance1=+Math.sqrt(Math.pow(x4-x1,2)+Math.pow(y4-y1,2));
  let distance2=+Math.sqrt(Math.pow(x4-x2,2)+Math.pow(y4-y3,2));
  let distance3=+Math.sqrt(Math.pow(x4-x3,2)+Math.pow(y4-y3,2));
  let max=distance1;
  let kq="";
  if(distance2>max)
  {
    max=distance2;
  }
  else if(distance3>max)
  {
    max=distance3;
  }
  if(max=distance1)
  {
    kq=sv1;
  }
  else if(max=distance2)
  {
    kq=sv2;
  }
  else if(max=distance3)
  {
    kq=sv3;
  }
  console.log(Math.sqrt(Math.pow(x4-x1,2)+Math.pow(y4-y1,2)));
  console.log(8);
  document.getElementById("result-w").style.display="block";
  document.getElementById("open").innerHTML= kq + " xa trường nhất"
}