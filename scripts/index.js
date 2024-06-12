const menuButton = document.getElementById("menu-icon");
const menuOptions = document.getElementById("menu-options");

menuButton.addEventListener("click", (evt) => {

    if(menuOptions.classList.contains("d-none")){
        menuOptions.classList.remove("d-none");
    }else{
        menuOptions.classList.add("d-none");
    }
})


/* CAMBIO DE COLORES */
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");

const color_match = "#231942"

const colores = ["#9F86C0", "#3F2E3E", "#A78295", "5E548E", "#231942", "#E0B1CB", "#9F86C0"]

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function color(){
    let random_color = Math.floor(Math.random()*7)
    return random_color
}

card1.addEventListener("click", (evt) => {

    if(document.getElementById("card-1").style.background == color_match){
        window.location.href = "https://www.eladiocarrion.com/latam?dates=true";
        console.log("fff")
    }

    document.getElementById("card-1").style.background = colores[color()]
})

card2.addEventListener("click", (evt) => {
    document.getElementById("card-2").style.background = colores[color()]
    getUsers()
})

card3.addEventListener("click", (evt) => {
    document.getElementById("card-3").style.background = colores[color()]
})

async function getUsers(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await respuesta.json()
    console.log(data)
}   