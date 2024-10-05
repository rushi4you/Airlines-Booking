
let parent10=document.createElement("div");
parent10.setAttribute("class","container-fluid bg-dark text-white bg10")
let row10=document.createElement("row");
row10.setAttribute("class","row justify-content-center");


let div111=document.createElement("div");
let row12=document.createElement("row");
row12.setAttribute("class"," row justify-content-end p-md-2")
let div112=document.createElement("div");

div112.setAttribute("class","col-6 w-50 d-none d-md-block" );

let ul1=document.createElement("ul");
ul1.setAttribute("class","list-unstyled d-flex  justify-content-evenly ")
let itms=["Home","Packages","Serivces" ,"About us", "Contact"]

for(let i=0;i<itms.length;i++)
{
    let li=document.createElement("li");
    li.innerHTML=itms[i];
    ul1.appendChild(li);

}
div112.appendChild(ul1);
row12.appendChild(div112);
div111.appendChild(row12);
row10.appendChild(div111);

let div10=document.createElement("div");
div10.setAttribute("class","col-12 col-md-4 col-lg-4");
let img10=document.createElement("img");
img10.setAttribute("src","img/illustation/Logo1.png");
img10.setAttribute("class","m-5 m-md-1")
div10.appendChild(img10);
row10.appendChild(div10);

let div11=document.createElement("div");
div11.setAttribute("class","col-12 col-md-4 col-lg-4 m-md-3 text-center");
let btn11=document.createElement("button");
btn11.innerHTML="BOOK TICKET";
btn11.setAttribute("class","btn btn-warning m-3");

let input11=document.createElement("input");
input11.setAttribute("placeholder","Enter Your Email");
input11.setAttribute("class","form-control")

let btn12=document.createElement("button");
btn12.innerHTML="SUBSCRIBE";
btn12.setAttribute("class","btn btn-secondary m-3 ");



div11.appendChild(btn11);
div11.appendChild(input11)
div11.appendChild(btn12);
row10.appendChild(div11);

parent10.appendChild(row10);
document.body.appendChild(parent10);


// ticket generation

btn11.addEventListener("click",ticket);
function ticket()
{
window.location="ticket.html";
}