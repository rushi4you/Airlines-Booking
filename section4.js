
let parent3=document.createElement("div");
parent3.setAttribute("class","container-fluid bg-dark mt-md-5 p-md-4 text-white bg3");
let row3=document.createElement("row");
 row3.setAttribute("class","row justify-content-center mt-lg-5 mb-md-5");

let subdiv31=document.createElement("div");
subdiv31.setAttribute("class","col-12 col-md-3 col-lg-3 lh-lg div31 d-none d-lg-block m-md-3"); 
let p31=document.createElement("p");
p31.innerHTML="<br><h3>Luxury Flight</h3>REACH WITH US TO REACH YOUR DESTINATION.<h3><br>Best Services</h3>REACH WITH US TO REACH YOUR DESTINATION.<h3><br>Certified Pilot</h3>REACH WITH US TO REACH YOUR DESTINATION."
p31.setAttribute("class","text-center pt-lg-5 lh-lg")
subdiv31.appendChild(p31);
row3.appendChild(subdiv31);

let subdiv32=document.createElement("div");
subdiv32.setAttribute("class","col-12 col-md-5 col-lg-3 m-md-3");
let imgdiv32=document.createElement("img");
imgdiv32.setAttribute("src","img/illustation/Showers1 (1).jpg");
imgdiv32.setAttribute("class","img-fluid")
subdiv32.appendChild(imgdiv32);
row3.appendChild(subdiv32);

let subdiv33=document.createElement("div");
subdiv33.setAttribute("class","col-12 col-md-5 col-lg-3 div33 border bg-black text-white lh-lg p-lg-5 m-md-3");
let psubdiv33=document.createElement("p");
psubdiv33.innerHTML="ABOUT FLIGHT<h3>We Have Best Luxury Services For You</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?"
psubdiv33.setAttribute("class","lh-lg")
pb33=document.createElement("button");
pb33.innerHTML="VIEW ABOUT";
pb33.setAttribute("class","btn btn-warning")
subdiv33.appendChild(psubdiv33);
subdiv33.appendChild(pb33);
row3.appendChild(subdiv33);

parent3.appendChild(row3);
document.body.appendChild(parent3);

