let parent1=document.createElement("div");
parent1.setAttribute("class","container-fluid text-white bg-black");

let row1=document.createElement("div");
row1.setAttribute("class","row d-flex justify-content-between");

let div1=document.createElement("div");
div1.setAttribute("class","col-3 col-md-5 col-lg-2 ms-5 d-flex justify-content-center");
img1=document.createElement("img");
img1.setAttribute("src","img/illustation/Logo1.png")
img1.setAttribute("class","img1")
div1.appendChild(img1);

let div2=document.createElement("div");
div2.setAttribute("class","col-7 d-none d-lg-block")
let ul=document.createElement("ul");
ul.setAttribute("class","list-unstyled d-flex  justify-content-evenly pt-5 ")
let itm=["Home","Packages","Serivces" ,"About us", "Contact"]

for(let i=0;i<itm.length;i++)
{
    let l=document.createElement("li");
    l.innerHTML=itm[i];
    ul.appendChild(l);

}
div2.appendChild(ul);

let div3=document.createElement("div");
div3.setAttribute("class","col-2");
let span1=document.createElement("span");
span1.setAttribute("class","fa-solid fa-bars text white pt-5 d-lg-none")
span1.setAttribute("data-bs-toggle","offcanvas");
span1.setAttribute("data-bs-target","#open");
div3.appendChild(span1);

row1.appendChild(div1);
row1.appendChild(div2);
row1.appendChild(div3);

parent1.appendChild(row1);
document.body.appendChild(parent1);

let off=document.createElement("div");
off.setAttribute("id","open");
off.innerHTML="hii";
