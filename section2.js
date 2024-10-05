
let parent=document.createElement("div");
parent.setAttribute("class","container-fluid bg-dark text-white p-2 p-md-4 sec1")
let row=document.createElement("row");
row.setAttribute("class","row justify-content-center");

let subdiv1=document.createElement("div");
subdiv1.setAttribute("class","col-12 col-md-5 col-lg-5 pt-md-5");
let secimg=document.createElement("img");
secimg.setAttribute("src","img/illustation/Png-2.png");
secimg.setAttribute("class","img-fluid s_border p-md-5 p-lg-1 align-item-center")
subdiv1.appendChild(secimg);
row.appendChild(subdiv1);

let subdiv2=document.createElement("div");
subdiv2.setAttribute("class","col-12 col-md-5 col-lg-5");

let p01=document.createElement("p");
p01.setAttribute("class","p-lg-5")
p01.innerHTML="<h4>Welcome to Flights</h4><h3>Private Charter with</h3> <h2>Global Coverage</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?<p>";
let btn=document.createElement("button");
btn.innerText="EXPLORE";
btn.setAttribute("class","btn btn-warning ")
p01.appendChild(btn)
subdiv2.appendChild(p01);
row.appendChild(subdiv2);

parent.appendChild(row);
document.body.appendChild(parent);

