let parentt=document.createElement("div");
parentt.setAttribute("class","container-fluid tiketpbg bg-dark text-white");
let parentr=document.createElement("row");
parentr.setAttribute("class","row justify-content-center");

let tr1=document.createElement("row");
tr1.setAttribute("class","row justify-content-center");

let div1=document.createElement("div");
div1.setAttribute("class","col-12 col-md-4 col-lg-4");
let img1=document.createElement("img");
img1.setAttribute("src","img/illustation/Logo1.png");
img1.setAttribute("class","p-5")
div1.appendChild(img1);


let div2=document.createElement("div");
div2.setAttribute("class","col-12 col-md-5 col-lg-4");
let h2=document.createElement("h1");
h2.setAttribute("class","p-md-5 mt-md-5 d-none d-md-block")
h2.innerHTML="FILL THE DETAILS";
div2.appendChild(h2);


tr1.appendChild(div1);
tr1.appendChild(div2);
parentr.appendChild(tr1);


let tr2=document.createElement("row");
tr2.setAttribute("class","row justify-content-center");

let div11=document.createElement("div");
div11.setAttribute("class","col-12 col-md-5 col-lg-5");
let input1=document.createElement("input");
input1.setAttribute("class","form-control m-md-3"); 
input1.setAttribute("id","f_name");
input1.setAttribute("placeholder","Enter Your First Name");
div11.appendChild(input1);

let div12=document.createElement("div");
div12.setAttribute("class","col-12 col-md-5 col-lg-5");
let input2=document.createElement("input");
input2.setAttribute("class"," form-control m-md-3")
input2.setAttribute("placeholder","Enter Your Last Name");
input2.setAttribute("id","l_name");
div12.appendChild(input2);

tr2.appendChild(div11);
tr2.appendChild(div12);
parentr.appendChild(tr2);


let tr3=document.createElement("row");
tr3.setAttribute("class","row justify-content-center");

let div21=document.createElement("div");
div21.setAttribute("class","col-12 col-md-5 col-lg-5");
let input3=document.createElement("select");
input3.setAttribute("class","form-select m-md-3")
input3.setAttribute("id","flight");
input3.setAttribute("placeholder","Select Your Flight");
let arr=["Select Your Flight","FA001","FA002","FA003","FA004"];
for(let i=0;i<=4;i++)
{
    let option=document.createElement("option");
    option.innerHTML=arr[i];
    option.setAttribute("value",arr[i]);
    input3.appendChild(option);
}
div21.appendChild(input3)

let div22=document.createElement("div");
div22.setAttribute("class","col-12 col-md-5 col-lg-5");
let input4=document.createElement("input");
input4.setAttribute("type","number");
input4.setAttribute("class","form-control m-md-3")
input4.setAttribute("placeholder","Enter Your Age");
input4.setAttribute("id","age");
div22.appendChild(input4);


tr3.appendChild(div21);
tr3.appendChild(div22);
parentr.appendChild(tr3);


let tr4=document.createElement("row");
tr4.setAttribute("class","row justify-content-center");

let div31=document.createElement("div");
div31.setAttribute("class","col-12 col-md-5 col-lg-5");

let input5=document.createElement("select");
input5.setAttribute("class","form-select m-md-3")
input5.setAttribute("placeholder","Select Your Flight");
input5.setAttribute("id","flight_class");
let arr1=["Select Your Flight Class","First Class","Business Class","Economy Class"];
for(let i=0;i<=3;i++)
{
    let option=document.createElement("option");
    option.innerHTML=arr1[i];
    option.setAttribute("value",arr1[i]);
    input5.appendChild(option);
}
div31.appendChild(input5)

let div32=document.createElement("div");
div32.setAttribute("class","col-12 col-md-5 col-lg-5");

let input6=document.createElement("select");
input6.setAttribute("class","form-select m-md-3")
input6.setAttribute("placeholder","Select Your seat");
input6.setAttribute("id","seat");
let arr3=["Select Your Seat","A/001","B/001","C/003"];
for(let i=0;i<=3;i++)
{
    let option=document.createElement("option");
    option.innerHTML=arr3[i];
    option.setAttribute("value",arr3[i]);
    input6.appendChild(option);
}
div32.appendChild(input6)

tr4.appendChild(div31);
tr4.appendChild(div32);
parentr.appendChild(tr4);



let tr5=document.createElement("row");
tr5.setAttribute("class","row justify-content-center");

let div41=document.createElement("div");
div41.setAttribute("class","col-12 col-md-5 col-lg-5");
let input7=document.createElement("select");
input7.setAttribute("class","form-select m-md-3")
input7.setAttribute("placeholder","Select From Flight");
input7.setAttribute("id","f_city");
let arr4=["Select From City","Kolhapur","Satra","Sangli"];
for(let i=0;i<=3;i++)
{
    let option=document.createElement("option");
    option.innerHTML=arr4[i];
    option.setAttribute("value",arr4[i]);
    input7.appendChild(option);
}
div41.appendChild(input7)

let div42=document.createElement("div");
div42.setAttribute("class","col-12 col-md-5 col-lg-5");
let input8=document.createElement("select");
input8.setAttribute("class","form-select m-md-3")
input8.setAttribute("placeholder","Select Your Flight");
input8.setAttribute("id","t_city");
let arr5=["Select To City","Pune","Mumbai","Nagpur"];
for(let i=0;i<=3;i++)
{
    let option=document.createElement("option");
    option.innerHTML=arr5[i];
    option.setAttribute("value",arr5[i]);
    input8.appendChild(option);
}
div42.appendChild(input8)

tr5.appendChild(div41);
tr5.appendChild(div42);
parentr.appendChild(tr5);


let tr6=document.createElement("row");
tr6.setAttribute("class","row justify-content-center");
let div51=document.createElement("div");
div51.setAttribute("class","col-12 col-md-5 col-lg-5");
let input9=document.createElement("input");
input9.setAttribute("type","date");
input9.setAttribute("id","date");
input9.setAttribute("class","form-control m-md-3")
div51.appendChild(input9);


tr6.appendChild(div51);
parentr.appendChild(tr6);

let tr7=document.createElement("row");
tr7.setAttribute("class","row justify-content-center");

let div52=document.createElement("div");
div52.setAttribute("class","col-12 col-md-3 col-lg-2");

let submit=document.createElement("button");
submit.setAttribute("type","submit");
submit.setAttribute("class","btn btn-primary m-3 ms-lg-5");
submit.innerHTML="SUBMIT";
submit.setAttribute("onclick","ticketshow()");

div52.appendChild(submit);
tr7.appendChild(div52);
parentr.appendChild(tr7);

parentt.appendChild(parentr);
document.body.appendChild(parentt);


function ticketshow()
{
    div2.style.color="white";
    let date1 =new Date();

   let f_name=document.getElementById("f_name");
   f_name=f_name.value;

   let l_name=document.getElementById("l_name");
   l_name=l_name.value;


   if(f_name=="" || l_name=="")
   {
    div2.style.color="red";
    ticketshow();
   }

   let flight=document.getElementById("flight");
   flight=flight.value;

   let age=document.getElementById("age");
   age=age.value;

   let flight_class=document.getElementById("flight_class");
   flight_class=flight_class.value;

   let seat=document.getElementById("seat");
   seat=seat.value;

   let f_city=document.getElementById("f_city");
   f_city=f_city.value;

   let t_city=document.getElementById("t_city");
   t_city=t_city.value;

   letdate=document.getElementById("date");
   date=date.value;


   alert(f_name+l_name+flight+age+flight_class+seat+f_city+t_city);


   let tp=document.createElement("div");
   tp.setAttribute("class","container");
   let tr=document.createElement("row");
   tr.setAttribute("class","row  m-md-3 justify-content-center tbg");

   let div61=document.createElement("div");
   div61.setAttribute("class","col-12 col-md-6 col-lg-5 text-center s_border");
   let p_name=document.createElement("p");
   p_name.setAttribute("class"," m-md-3")
   p_name.innerHTML="<h3>Passanger Name :: "+f_name+" "+l_name+"</h3>";
   div61.appendChild(p_name);

   let tr1=document.createElement("div");
   tr1.setAttribute("class","row  m-md-3 p-md-3");

   let d1=document.createElement("div");
   d1.setAttribute("class","col-12 col-md-4");
   d1.innerHTML="<b>Flight  ::</b></br>"+flight;

   let d2=document.createElement("div");
   d2.setAttribute("class","col-12 col-md-4");
   d2.innerHTML="<b>Date   ::</b></br>"+date;

   let d3=document.createElement("div");
   d3.setAttribute("class","col-12 col-md-4");
   d3.innerHTML="<b>Seat   ::</b></br>"+seat;

   tr1.appendChild(d1);
   tr1.appendChild(d2);
   tr1.appendChild(d3);
   div61.appendChild(tr1);


   let tr2=document.createElement("div");
   tr2.setAttribute("class","row s_border m-md-3 p-md-3");

   let d11=document.createElement("div");
   d11.setAttribute("class","col-12 col-md-4");
   d11.innerHTML="<b>From city  ::</b></br>"+f_city;

   let d12=document.createElement("div");
   d12.setAttribute("class","col-12 col-md-4 fa-solid fa-plane icon");


   let d13=document.createElement("div");
   d13.setAttribute("class","col-12 col-md-4");
   d13.innerHTML="<b>To city  ::</br></b>"+t_city;

   tr2.appendChild(d11);
   tr2.appendChild(d12);
   tr2.appendChild(d13);
   div61.appendChild(tr2);


   let tr3=document.createElement("div");
   tr3.setAttribute("class","row");

   let d21=document.createElement("div");
   d21.setAttribute("class","col-12 col-md-3 p-md-5");
   let barcode=document.createElement("img");
   barcode.setAttribute("src","img/illustation/download\ \(1\).png");
   barcode.setAttribute("class","barcode");

   d21.appendChild(barcode);
 

   let d22=document.createElement("div");
   d22.setAttribute("class","col-12 col-md-4 p-md-5");
   d22.innerHTML="<b>Gate No. ::</br></b>G-02 ";


   let d23=document.createElement("div");
   d23.setAttribute("class","col-12 col-md-4 p-md-5");
   d23.innerHTML="<b>Boarding Time::</b> "+parseInt(date1.getHours()+3);

   tr3.appendChild(d21);
   tr3.appendChild(d22);
   tr3.appendChild(d23);
   div61.appendChild(tr3);

  

 
   let div62=document.createElement("div");
   div62.setAttribute("class","col-12 col-md-5 col-lg-3  s_border bg-warning fw-bold text-white ");

   let div71=document.createElement("p");
   div71.setAttribute("class","col-12 p-md-3");
   div71.innerHTML="<h3>Passanger Name::</h3></br>"+f_name+" "+l_name;

   div62.appendChild(div71);

   let row1=document.createElement("div");
   row1.setAttribute("class","row");

   let div81=document.createElement("div");
   div81.setAttribute("class","col-6 p-md-3");
   div81.innerHTML="<b>Flight ::</b></br> "+flight;

   let div82=document.createElement("div");
   div82.setAttribute("class","col-6 p-md-3");
   div82.innerHTML="<b>Seat ::</b></br> "+seat;

   row1.appendChild(div81);
   row1.appendChild(div82);

   let row2=document.createElement("div");
   row2.setAttribute("class","row p-md-3");

   let div83=document.createElement("div");
   div83.setAttribute("class","col-6 p-md-3");
   div83.innerHTML="<b>Flight ::</b></br> "+flight;

   let div84=document.createElement("div");
   div84.setAttribute("class","col-6 p-md-3");
   div84.innerHTML="<b>Seat ::</b></br> "+seat;


   let row3=document.createElement("row");
   row3.setAttribute("class","row");
   let div85=document.createElement("div");
   let img3=document.createElement("img");
   img3.setAttribute("src","img/illustation/download\ \(1\).png")
   img3.setAttribute("class","barcode m-md-5");
    div85.appendChild(img3);


 
   row2.appendChild(div83);
   row2.appendChild(div84);
   row3.appendChild(div85);

   div62.appendChild(row1);
   div62.appendChild(row2);
   div62.appendChild(row3);

   tr.appendChild(div61);
   tr.appendChild(div62);
   tp.appendChild(tr);

   document.body.appendChild(tp);


}