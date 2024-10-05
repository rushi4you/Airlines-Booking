
let parent8=document.createElement("div");
parent8.setAttribute("class","container-fluid mt-md-5");
let row8=document.createElement("row");
row8.setAttribute("class","row justify-content-center");

let div81=document.createElement("div");
div81.setAttribute("class","col-12 col-md-12 col-lg-3 m-2 p-md-5 p-lg-2");
let p81=document.createElement("p");
p81.innerHTML="<p>OUR PACKAGES</p><h3>We Have Best Luxury Packages For You</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi?,</p>";
div81.appendChild(p81);

let div82=document.createElement("div");
div82.setAttribute("class","col-12 col-md-5 col-lg-3 text-white text-center p-md-4 bg82 m-2");
let p82=document.createElement("p");
p82.innerHTML="<h4>Modern glamour in Boston</h4><h5> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5> </br> <p> Nulla at maximus leo non molestie diam.</p> </br> <p> Suspendisse auctor felis ipsum.</p> </br> <p> Donec sit amet dui.</p>";
div82.appendChild(p82);


let div83=document.createElement("div");
div83.setAttribute("class","col-12 col-md-5 col-lg-3 text-white text-center p-md-4 bg83 m-2");
let p83=document.createElement("p");
p83.innerHTML="<h4>Elegant oasis in Chicago</h4><h5> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5> </br> <p> Nulla at maximus leo non molestie diam.</p> </br> <p> Suspendisse auctor felis ipsum.</p> </br> <p> Donec sit amet dui.</p>";
div83.appendChild(p83);


row8.appendChild(div81);
row8.appendChild(div82);
row8.appendChild(div83);

parent8.appendChild(row8);
document.body.appendChild(parent8);

