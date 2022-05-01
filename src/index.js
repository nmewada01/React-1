import { navbar } from "../components/navbar";
//console.log('navbar:',navbar);

import "../styles/navbar.css";

let append_div = document.querySelector("#navbar");
append_div.innerHTML = navbar();

    let btn = document.querySelector("#submit");
    btn.addEventListener("click",()=>{

        let showing = document.querySelector("#show");
        showing.innerHTML = null;



        let dib = document.createElement("div")

        let image = document.createElement("img")
        image.src = "https://media.istockphoto.com/photos/airline-tickets-picture-id535044885?b=1&k=20&m=535044885&s=170667a&w=0&h=iP0Hgy9v72H1yXe2G_Q90rfi10jYPU6yQZtNAjjWrfQ="


        let name = document.createElement("h3")
        name.innerText =  `Your Name: ${document.querySelector("#Name").value}`;

        let location = document.createElement("h4")
        location.innerText =  `Location: ${document.querySelector("#location").value}`;

        let place = document.createElement("h4")
        place.innerText =  `Destination: ${document.querySelector("#place").value}`;

        let Ticket = document.createElement("p")
        Ticket.innerText = `Ticket No: xxxxxxxxxxx`;
    
        dib.append(image,name,location,place,Ticket);
        showing.append(dib);
        
    });