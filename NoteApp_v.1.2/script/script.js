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
        <button class="delete-btn">Delete</button>
    `;
    noteElement.setAttribute("data-id", note.id);
    noteList.appendChild(noteElement);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const noteTitle = document.getElementById("noteTitle").value.trim();
  const noteBody = document.getElementById("noteBody").value.trim();
  const noteTitleInput = document.getElementById("noteTitle");
  const noteBodyInput = document.getElementById("noteBody");

  // Validasi judul catatan
  if (!noteTitle) {
    noteTitleInput.setCustomValidity("Title cannot be empty");
  } else {
    noteTitleInput.setCustomValidity("");
  }

  // Validasi isi catatan
  if (!noteBody) {
    noteBodyInput.setCustomValidity("Note body cannot be empty");
  } else {
    noteBodyInput.setCustomValidity("");
  }

  // Jika kedua validasi terpenuhi, tambahkan catatan
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
