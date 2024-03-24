import { notesData } from "./notesData.js";

function displayNotes() {
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notesData.forEach((note) => {
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
    notesData.push(newNote);
    localStorage.setItem("notesData", JSON.stringify(notesData));
    displayNotes();
    document.getElementById("noteForm").reset();
  } else {
    alert("Please enter both title and body for the note.");
  }
}

document
  .getElementById("noteForm")
  .addEventListener("submit", handleFormSubmit);

if (localStorage.getItem("notesData")) {
  const storedData = JSON.parse(localStorage.getItem("notesData"));
  notesData.length = 0;
  storedData.forEach((item) => notesData.push(item));
}

displayNotes();
