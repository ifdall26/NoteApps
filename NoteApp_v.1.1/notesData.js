export const getNotesData = () => {
  const savedData = JSON.parse(localStorage.getItem("notesData"));
  return savedData || dummyData;
};

export const saveNotesData = (data) => {
  localStorage.setItem("notesData", JSON.stringify(data));
};

const dummyData = [
  {
    id: "notes-jT-jjsyz61J8XKiI",
    title: "Welcome to Notes, Dimas!",
    body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
    createdAt: "2022-07-28T10:03:12.594Z",
    archived: false,
  },
  {
    id: "notes-aB-cdefg12345",
    title: "Meeting Agenda",
    body: "Discuss project updates and assign tasks for the upcoming week.",
    createdAt: "2022-08-05T15:30:00.000Z",
    archived: false,
  },
  // Data dummy lainnya...
];

// Default data untuk digunakan jika tidak ada data tersimpan di localStorage
const initialData = getNotesData() || dummyData;

// Gunakan initialData sebagai data default
export let notesData = initialData;

export const addNote = (newNote) => {
  notesData.push(newNote);
  saveNotesData(notesData);
};
