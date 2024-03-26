import { getNotes, addNote, deleteNote } from "./notesData.js";

function displayNotes(notes) {
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("data-id", note.id); // Menambahkan atribut khusus
    noteElement.innerHTML = `
        <span slot="title">${note.title}</span>
        <span slot="body">${note.body.replace(/\n/g, "<br>")}</span>
    `;
    noteList.appendChild(noteElement);

    noteElement.addEventListener("delete", () => {
      deleteNoteHandler(note.id);
    });
  });
}

function deleteNoteHandler(noteId) {
  deleteNote(noteId);
  displayNotes(getNotes());
}

function handleFormSubmit(event) {
  event.preventDefault();
  const noteTitle = document.getElementById("noteTitle").value.trim();
  const noteBody = document.getElementById("noteBody").value.trim();

  if (!noteTitle) {
    alert("Title cannot be empty");
    return;
  }

  if (!noteBody) {
    alert("Note body cannot be empty");
    return;
  }

  const newNote = {
    id: `note-${Math.random().toString(36).substr(2, 9)}`,
    title: noteTitle,
    body: noteBody.replace(/\n/g, "<br>"),
    createdAt: new Date().toISOString(),
    archived: false,
  };
  addNote(newNote);
  const notes = getNotes(); // Get updated notes after adding new note
  displayNotes(notes);
  document.getElementById("noteForm").reset();
}

document
  .getElementById("noteForm")
  .addEventListener("submit", handleFormSubmit);

document.addEventListener("DOMContentLoaded", () => {
  const notes = getNotes(); // Get notes from notesData.js
  displayNotes(notes); // Display notes when the page loads
});
