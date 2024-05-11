const menuBar = document.querySelector(".fa-ellipsis-vertical");
const menuList = document.querySelector(".menu-list");
const allNotes = document.querySelector(".notes-title h3");
const triangle = document.querySelector(".fa-caret-down");
const allNotesSlide = document.querySelector(".allnotes-slide");

// clone slideUp
const allNotesClone = document.querySelector(".container .notes-title h3");
const triangleClone = document.querySelector(".container .notes-title .fa-caret-down");
const menuListClone = document.querySelector(".container .menu .menu-list");
const menuBarClone = document.querySelector(".container .menu .fa-ellipsis-vertical");

function slideUp(){
    triangle.classList.toggle("rotate");
    triangleClone.classList.toggle("rotates");

    if(allNotesSlide.style.bottom === "0px"){
        allNotesSlide.style.bottom = "-500px";
    }
    else{
        allNotesSlide.style.bottom = "0px";
    }

    menuList.style.display = "none";
    
}

function menuLists(className){
    if(className.style.display == "none"){
        className.style.display = "block";
    }
    else{
        className.style.display = "none";
    }
}

menuBarClone.addEventListener("click", () => {
    menuLists(menuListClone);
})


menuBar.addEventListener("click", () => {
    menuLists(menuList);
})

allNotes.addEventListener("click", slideUp);
allNotesClone.addEventListener("click", slideUp);

