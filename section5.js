
let parent4=document.createElement("div");
parent4.setAttribute("class","container");
let row4=document.createElement("row");
row4.setAttribute("class","row p-md-5");

let subdiv41=document.createElement("div");
subdiv41.setAttribute("class","col-12 col-md-12 col-lg-4 pt-lg-5 ");
let sp41=document.createElement("p");
sp41.innerHTML="OUR BENEFIT<h2><br>Learn More About Private Jet Benefits</h2><br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?"
subdiv41.appendChild(sp41);
row4.appendChild(subdiv41);

let subdiv42=document.createElement("div");
subdiv42.setAttribute("class","col-12 col-md-12 col-lg-8 ");
let row42=document.createElement("row");
row42.setAttribute("class","row text-center justify-content-center");

let div41=document.createElement("div");
div41.setAttribute("class","col-12 col-md-3 col-lg-3 m-1 m-md-3 bg-warning");
let p41=document.createElement("p");
p41.innerHTML="<h2>01</h3><h6>Safety and Security</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.";
div41.appendChild(p41);

let div42=document.createElement("div");
div42.setAttribute("class","col-12 col-md-3 col-lg-3 m-1 m-md-3 bg-warning");
let p42=document.createElement("p");
p42.innerHTML="<h2>02</h3><h6>Safety and Security</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.";
div42.appendChild(p42);

let div43=document.createElement("div");
div43.setAttribute("class","col-12 col-md-3 col-lg-3 m-1 m-md-3 bg-warning");
let p43=document.createElement("p");
p43.innerHTML="<h2>03</h3><h6>Safety and Security</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.";
div43.appendChild(p43);

let div44=document.createElement("div");
div44.setAttribute("class","col-12 col-md-3 col-lg-3 m-1 m-md-3 bg-warning");
let p44=document.createElement("p");
p44.innerHTML="<h2>04</h3><h6>Safety and Security</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.";
div44.appendChild(p44);

let div45=document.createElement("div");
div45.setAttribute("class","col-12 col-md-3 col-lg-3 m-1 m-md-3 bg-warning");
let p45=document.createElement("p");
p45.innerHTML="<h2>05</h3><h6>Safety and Security</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.";
div45.appendChild(p45);

let div46=document.createElement("div");
div46.setAttribute("class","col-12 col-md-3 col-lg-3 m-1 m-md-3 bg-warning");
let p46=document.createElement("p");
p46.innerHTML="<h2>06</h3><h6>Safety and Security</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.";
div46.appendChild(p46);

row42.appendChild(div41);
row42.appendChild(div42);
row42.appendChild(div43);
row42.appendChild(div44);
row42.appendChild(div45);
row42.appendChild(div46);

subdiv42.appendChild(row42);

row4.appendChild(subdiv42);

parent4.appendChild(row4);

document.body.appendChild(parent4);

