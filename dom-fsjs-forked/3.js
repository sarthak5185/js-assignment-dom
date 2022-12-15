let create = document.createElement("section");

create.className = "parent";

create.appendChild(document.createElement("h3"));

create.querySelector("h3").innerText = "My New FAQ";

let select = document.querySelector(".article .accordion-homepage");

select.appendChild(create);
