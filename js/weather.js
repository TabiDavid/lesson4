const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function getUpdate(){
  
    var d = document.lastModified;

    document.getElementById("outputDiv").innerHTML = "Last Update: " + d;
}

