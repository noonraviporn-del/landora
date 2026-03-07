function saveProperty(){

let title=document.getElementById("title").value;
let location=document.getElementById("location").value;
let price=document.getElementById("price").value;
let image=document.getElementById("image").value;

let property={

title:title,
location:location,
price:price,
image:image

};

let properties=JSON.parse(localStorage.getItem("properties")) || [];

properties.push(property);

localStorage.setItem("properties",JSON.stringify(properties));

alert("Property Posted!");

}
