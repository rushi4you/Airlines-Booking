
let parent2=document.createElement("div");
parent2.setAttribute("class","container");
let row2=document.createElement("row");
row2.setAttribute("class","row");

let subdiv12=document.createElement("div");
subdiv12.setAttribute("class","col-12 col-md-5 col-lg-5 pt-lg-3 pt-md-5 lh-lg");
let p2=document.createElement("p");
p2.innerHTML="<span>OUR SERVICES</span><h3>We Have Best </h3><h2>Luxury Services</h2><h3>For You</h3> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?<p>"
p2.setAttribute("class","p-lg-5 mt-md-5")
let btn2=document.createElement("button");
btn2.innerText="VIEW SERVICES";
btn2.setAttribute("class","btn btn-warning ")
p2.appendChild(btn2);
subdiv12.appendChild(p2);
row2.appendChild(subdiv12);

let subdiv22=document.createElement("div");
subdiv22.setAttribute("class","col-12 col-md-7 col-lg-7 mt-md-5 text-white bg2");
let row22=document.createElement("row");
row22.setAttribute("class","row justify-content-center");

let div21=document.createElement("div");
div21.setAttribute("class","col-12 col-md-5 col-lg-5 p-lg-2 m-md-1 fs-lg");
let p3=document.createElement("p");
let i1=document.createElement("p");
i1.setAttribute("class","fa-solid fa-paper-plane icon");
div21.appendChild(i1);
p3.innerHTML="<h3>Private Jet Charter</h3> <p>We bring the right people together to challenge established thinking and drive transform in 2020<p/p>";
p3.setAttribute("class","border border-primary m-md-2 p-lg-2 phover");
div21.appendChild(p3);


let div22=document.createElement("div");
div22.setAttribute("class","col-12 col-md-5 col-lg-5 p-lg-2 m-md-1 fs-lg");
let p4=document.createElement("p");
let i2=document.createElement("p");
i2.setAttribute("class","fa-solid fa-gears icon");
div22.appendChild(i2);
p4.innerHTML="</i><h3>Private Jet Charter</h3> <p>We bring the right people together to challenge established thinking and drive transform in 2020<p/p>";
p4.setAttribute("class","border border-primary m-md-2  p-lg-2 phover");
div22.appendChild(p4);

let div23=document.createElement("div");
div23.setAttribute("class","col-12 col-md-5 col-lg-5 p-lg-2 m-md-1 fs-lg");
let p5=document.createElement("p");
let i3=document.createElement("p");
i3.setAttribute("class","fa-solid fa-truck-medical icon");
div23.appendChild(i3);
p5.innerHTML="<h3>Private Jet Charter</h3> <p>We bring the right people together to challenge established thinking and drive transform in 2020<p/p>";
p5.setAttribute("class","border border-primary m-lg-2  p-md-1 phover");
div23.appendChild(p5);

let div24=document.createElement("div");
div24.setAttribute("class","col-12 col-md-5 col-lg-5 p-lg-2 m-md-1 fs-lg");
let p6=document.createElement("p");
let i4=document.createElement("p");
i4.setAttribute("class","fa-solid fa-person-circle-xmark icon");
div24.appendChild(i4);
p6.innerHTML="<h3>Private Jet Charter</h3> <p>We bring the right people together to challenge established thinking and drive transform in 2020<p/p>";
p6.setAttribute("class","border border-primary m-lg-2  p-md-1 phover");
div24.appendChild(p6);

row22.appendChild(div21);
row22.appendChild(div22);
row22.appendChild(div23);
row22.appendChild(div24);

subdiv22.appendChild(row22);

row2.appendChild(subdiv22);

parent2.appendChild(row2);
document.body.appendChild(parent2);

