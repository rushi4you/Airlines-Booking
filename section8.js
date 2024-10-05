
let parent7=document.createElement("div");
parent7.setAttribute("class","container-fluid text-white mt-md-5 bg7");
let row7=document.createElement("row");
row7.setAttribute("class","row justify-content-center");

let div71=document.createElement("div");
div71.setAttribute("class","col-12 col-md-5 col-lg-5 m-2");
let p71=document.createElement("p");
p71.setAttribute("class","p-md-2 p-lg-5 m-md-2")
p71.innerHTML="<p>TESTIMONIALS</p> <h3>What Client Says About Flights</h3> </br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?</p>"
let btn71=document.createElement("button");
btn71.setAttribute("class","btn btn-warning")
btn71.innerText="VIEW TESTIMONIALS";
p71.appendChild(btn71);
div71.appendChild(p71);
row7.appendChild(div71);

let div72=document.createElement("div");
div72.setAttribute("class","col-12 col-md-5 col-lg-5 m-2");
let p72=document.createElement("p");
p72.innerHTML="<p> Nam antimperdiet ex. Sed eget eros suscipit erat condimentum vehicula et egestas nisi. Phasellus pulvinar cursus sem, non placerat nulla elementum eu. Aenean fermentum sem sed gravida tincidunt. Morbi vitae lacus mi. Proin arcu augue, euismod sodales molestie ac, varius e erat, aliquam eget enim sed </p>"
p72.setAttribute("class","p-md-2 p-lg-5")
let img72=document.createElement("img");
img72.setAttribute("src","img/illustation/t2.jpg");
img72.setAttribute("class","img72")
p72.appendChild(img72);

div72.appendChild(p72);
row7.appendChild(div72);

parent7.appendChild(row7);
document.body.appendChild(parent7);

