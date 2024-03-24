import { notesData, addNote } from "./notesData.js";

// Function to create a single note item
function createNoteItem(note) {
  const noteItem = document.createElement("div");
  noteItem.classList.add("note-item");
  noteItem.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.body}</p>
    <small>${note.createdAt}</small>
  `;
  applyWordWrap(noteItem); // Apply word wrap
  return noteItem;
}

// Menampilkan daftar catatan
function displayNotes() {
  console.log("Displaying notes...");
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = ""; // Clear the existing notes
  notesData.forEach((note) => {
    const noteItem = createNoteItem(note);
    notesList.appendChild(noteItem);
  });
}

// Menambahkan catatan baru
function addNote() {
  console.log("Adding a new note...");
  const noteForm = document.getElementById("noteForm");
  const title = noteForm.noteTitle.value;
  const body = noteForm.noteBody.value;
  const createdAt = new Date().toISOString();

  if (title && body) {
    const newNote = {
      id: `notes-${Math.random().toString(36).substr(2, 9)}`,
      title,
      body,
      createdAt,
      archived: false,
    };
    addNote(newNote); // Panggil fungsi addNote
    console.log("New note added:", newNote);
    displayNotes();
    noteForm.reset();
  } else {
    alert("Title and Body are required!");
  }
}

// Apply word wrap CSS property
function applyWordWrap(element) {
  element.style.wordWrap = "break-word";
}

// Memanggil fungsi displayNotes saat aplikasi dimuat
window.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded");
  displayNotes();
});

// Event listener untuk submit form
const noteForm = document.getElementById("noteForm");
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addNote();
});
