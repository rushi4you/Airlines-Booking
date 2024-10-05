
let parent6=document.createElement("div");
parent6.setAttribute("class","container mt-md-5  text-center")
let row6=document.createElement("row");
row6.setAttribute("class","row justify-content-center");

let div61=document.createElement("div");
div61.setAttribute("class","col-12 p-2");
let p61=document.createElement("p");
p61.innerHTML="<h3>We Provide Luxury Deals for You</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?</p>";
div61.appendChild(p61);

let div62=document.createElement("div");
div62.setAttribute("class","col-12 col-md-3 col-lg-3 text-white p-2 p-md-4 m-2 m-md-4 bg62");
let p62=document.createElement("p");
p62.innerHTML="<h3>Airbus A380-</br>All Surya</h3></br><p>Nomaden 900 </br>5 - 16 Seats</p> <h6>Price: $10,000/ hr</h6>";
div62.appendChild(p62);

let div63=document.createElement("div");
div63.setAttribute("class","col-12 col-md-3 col-lg-3 text-white p-2 p-md-4 m-2 m-md-4 bg63");
let p63=document.createElement("p");
p63.innerHTML="<h3>Boeing 747-8</br>VIP - All Surya</h3></br><p>Nomaden 900 </br>5 - 10 Seats</p> <h6>Price: $15,000/ hr</h6>";
div63.appendChild(p63);

let div64=document.createElement("div");
div64.setAttribute("class","col-12 col-md-3 col-lg-3 text-white p-2 p-md-4 m-2 m-md-4 bg64");
let p64=document.createElement("p");
p64.innerHTML="<h3>Boeing 767-</br>33A - All Surya</h3></br><p>Nomaden 900 </br>15 - 20 Seats</p> <h6>Price: $25,000/ hr</h6>";
div64.appendChild(p64);


row6.appendChild(div61);
row6.appendChild(div62);
row6.appendChild(div63);
row6.appendChild(div64);


parent6.appendChild(row6);
document.body.appendChild(parent6);

