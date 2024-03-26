import { getNotes, addNote } from "./notesData.js";

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
    noteList.appendChild(noteElement);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const noteTitle = document.getElementById("noteTitle").value.trim();
  const noteBody = document.getElementById("noteBody").value.trim();

  // Validasi judul catatan
  if (!noteTitle) {
    alert("Title cannot be empty");
    return;
  }

  // Validasi isi catatan
  if (!noteBody) {
    alert("Note body cannot be empty");
    return;
  }

  // Jika kedua validasi terpenuhi, tambahkan catatan
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
}

document
  .getElementById("noteForm")
  .addEventListener("submit", handleFormSubmit);

displayNotes();
