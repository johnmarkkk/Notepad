const notesElement = document.querySelector("footer .footer .notes");

const todoElement = document.querySelector("footer .footer .todo");

const contain = document.querySelector(".contain");
const container = document.querySelector(".container");

notesElement.addEventListener('click', () => {
    contain.style.left = "0";
    container.style.right = "-100%";
})

todoElement.addEventListener('click', () => {
    container.style.right = "0%";
    contain.style.left = "-100%";
})