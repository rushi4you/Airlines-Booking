
let parent5=document.createElement("div");
parent5.setAttribute("class","container-fluid bg5 text-white text-center mt-md-5")
let row5=document.createElement("row");
row5.setAttribute("class","row justify-content-center");

let subdiv51=document.createElement("div");
subdiv51.setAttribute("class","col-12 col-md-2 col-lg-2 p-md-5");
let i51=document.createElement("p");
i51.setAttribute("class","fa-solid fa-id-card-clip icon");
let p51=document.createElement("p");
p51.innerHTML="<h1>89</h1><p>Professional Pilots</p>"
subdiv51.appendChild(i51);
subdiv51.appendChild(p51);


let subdiv52=document.createElement("div");
subdiv52.setAttribute("class","col-12 col-md-2 col-lg-2 p-md-5");
let i52=document.createElement("p");
i52.setAttribute("class","fa-solid fa-earth-europe icon");
let p52=document.createElement("p");
p52.innerHTML="<h1>89</h1><p>Professional Pilots</p>"
subdiv52.appendChild(i52);
subdiv52.appendChild(p52);

let subdiv53=document.createElement("div");
subdiv53.setAttribute("class","col-12 col-md-2 col-lg-2 p-md-5");
let i53=document.createElement("p");
i53.setAttribute("class","fa-solid fa-paper-plane icon");
let p53=document.createElement("p");
p53.innerHTML="<h1>89</h1><p>Professional Pilots</p>"
subdiv53.appendChild(i53);
subdiv53.appendChild(p53);

let subdiv54=document.createElement("div");
subdiv54.setAttribute("class","col-12 col-md-2 col-lg-2 p-md-5");
let i54=document.createElement("p");
i54.setAttribute("class","fa-solid fa-map-location-dot icon");
let p54=document.createElement("p");
p54.innerHTML="<h1>89</h1><p>Professional Pilots</p>"
subdiv54.appendChild(i54);
subdiv54.appendChild(p54);


row5.appendChild(subdiv51);
row5.appendChild(subdiv52);
row5.appendChild(subdiv53);
row5.appendChild(subdiv54);
parent5.appendChild(row5);
document.body.appendChild(parent5);

