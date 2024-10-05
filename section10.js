
let parent9=document.createElement("div");
parent9.setAttribute("class","container-fluid text-white text-center bg9 mt-md-5")
let row9=document.createElement("row");
row9.setAttribute("class","row justify-content-center");

let div9=document.createElement("div");
div9.setAttribute("class","col-8");
let p91=document.createElement("p");
p91.setAttribute("class","p-md-5")
p91.innerHTML="<h3>Tell us your requirements and one of our charter</br> experts will send you a quote.  </h3></br><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ab modi exercitationem, obcaecati est sint temporibus cumque culpa in natus dignissimos at similique asperiores sequi iusto. Optio repellat placeat modi? </p>";
let btn91=document.createElement("button");
btn91.setAttribute("class","btn btn-warning");
btn91.innerText="ENQUIRE NOW";
p91.appendChild(btn91);
div9.appendChild(p91);
row9.appendChild(div9);
parent9.appendChild(row9);
document.body.appendChild(parent9);

