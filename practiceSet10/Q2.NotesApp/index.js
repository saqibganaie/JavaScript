const addNoteBtn = document.getElementById("add-note-btn");
const deleteNoteBtn = document.getElementById("delete-note-btn");
const notesContainer = document.getElementById("notes-container")
let noteSerial = 0;
window.onload = function run(){
    if (localStorage.getItem("NoteSerial") == null || localStorage.getItem("NoteSerial") == 0){
        localStorage.setItem("NoteSerial", 0);
        notesContainer.innerHTML = "<div>No notes yet ☹️..."
    }else{
        noteSerial = localStorage.getItem("NoteSerial");
        loadNotes();
    }
}
function addNote(){
    noteSerial = localStorage.getItem("NoteSerial");
    let note = prompt("Add your note");
    localStorage.setItem(`note${noteSerial}`, note);
    noteSerial++;
    localStorage.setItem("NoteSerial", `${noteSerial}`)
    updateNotesContainer();
}
function updateNotesContainer(){
    let latestNote = localStorage.getItem(`note${noteSerial - 1}`);
    if (noteSerial == 1){
        notesContainer.innerHTML = `<li>${latestNote}</li>`;
    }else{
    notesContainer.innerHTML += `<li>${latestNote}</li>`;
    }
}
function loadNotes(){
    if (noteSerial == 0){
        return;
    }
    notesContainer.innerHTML = "";
    //noteSerial = localStorage.getItem("NoteSerial");
    let currIndex = 0;
    
    for (let i = 0; i < localStorage.length; i++){
        let currNoteKey = localStorage.key(i);
        if (currNoteKey == "NoteSerial" || currNoteKey == "debug"){
            continue;
        }
        let currNote = localStorage.getItem(`note${currIndex}`)
        console.log(currNote)
        notesContainer.innerHTML += `<li>${currNote}</li>`
        currIndex++;
    }
}

function deleteLastNote(){
    if (noteSerial == 0){
        return;
    }
    if (noteSerial == 1){
        notesContainer.innerHTML = "<div>No notes yet ☹️..."
    }
    localStorage.removeItem(`note${noteSerial - 1}`);
    noteSerial--;
    localStorage.setItem("NoteSerial", `${noteSerial}`)
    loadNotes();
}

addNoteBtn.addEventListener('click',()=>{
    addNote();
})
deleteNoteBtn.addEventListener("click", ()=>{
    deleteLastNote();
})