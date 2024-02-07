
const btnAdd = document.querySelector(".btn_add");
const notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach((noteTxt)=>addNote(noteTxt))
}
btnAdd.addEventListener("click", () => addNote());

function addNote(text = ""){

const note = document.createElement("div");

note.classList.add("note-wrapper");

note.innerHTML = `
<div class="operations">

<button class="edit fas fa-edit"></button>

<button class="delete fas fa-trash-alt"></button>

</div>

<div class="main ${text ?"" : "hidden"}"></div>

<textarea class="${text ? "hidden" : ""}"></textarea>`;

const editBtn = note.querySelector(".edit");

const deleteBtn = note.querySelector(".delete"); 
const mainEl = note.querySelector(".main"); 
const textAreaEL = note.querySelector("textarea");
textAreaEL.value=text;
mainEl.innerHTML=text;
deleteBtn.addEventListener("click", () => { note.remove();
    updates();

});
editBtn.addEventListener("click", () => {

    mainEl.classList.toggle("hidden");
    
    textAreaEL.classList.toggle("hidden");
    
    });
    
    textAreaEL.addEventListener("input", (e) => { 
        const { value } = e .target;
    
    mainEl.innerHTML = value;
    updates();
    });
document.body.appendChild(note);
}
function updates() {

    const noteText = document.querySelectorAll("textarea");
    
    const notes = [];
    
    noteText.forEach((note) => notes.push(note.value)); 
    localStorage.setItem("notes", JSON.stringify(notes));
}