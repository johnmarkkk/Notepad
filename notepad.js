const menuBar = document.querySelector(".fa-ellipsis-vertical");
const menuList = document.querySelector(".menu-list");
const allNotes = document.querySelector(".notes-title h3")
const triangle = document.querySelector(".fa-caret-down");
const allNotesSlide = document.querySelector(".allnotes-slide")

menuBar.addEventListener("click", () => {
    if(menuList.style.display == "none"){
        menuList.style.display = "block";
    }
    else{
        menuList.style.display = "none";
    }
})

allNotes.addEventListener("click", () => {
    triangle.classList.toggle("rotate");

    if(allNotesSlide.style.bottom === "0px"){
        allNotesSlide.style.bottom = "-500px";
    }
    else{
        allNotesSlide.style.bottom = "0px";
    }
    
})

