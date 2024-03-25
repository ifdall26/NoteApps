import { getNotes, addNote, deleteNote } from "./notesData.js";

function displayNotes() {
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  const notes = getNotes();
  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.innerHTML = `
        <span slot="title">${note.title}</span>
        <span slot="body">${note.body.replace(/\n/g, "<br>")}</span>
    `;
    noteElement.setAttribute("data-id", note.id);
    noteList.appendChild(noteElement);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const noteTitle = document.getElementById("noteTitle").value;
  const noteBody = document.getElementById("noteBody").value;
  if (noteTitle && noteBody) {
    const newNote = {
      id: `note-${Math.random().toString(36).substr(2, 9)}`,
      title: noteTitle,
      body: noteBody.replace(/\n/g, "<br>"),
      createdAt: new Date().toISOString(),
      archived: false,
    };
    addNote(newNote);
    displayNotes();
    document.getElementById("noteForm").reset();
  } else {
    alert("Please enter both title and body for the note.");
  }
}

document
  .getElementById("noteForm")
  .addEventListener("submit", handleFormSubmit);

displayNotes();

document.getElementById("noteList").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const noteId = event.target.closest("note-item").getAttribute("data-id");
    deleteNote(noteId);
    displayNotes();
  }
});
