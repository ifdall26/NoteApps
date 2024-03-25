class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                .note {
                    background-color: #EDEDED;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 10px;
                    margin-bottom: 10px;
                    overflow-wrap: break-word;
                    position: relative;
                    z-index : 1;
                }
                
                .note h2 {
                    margin-top: 0;
                    color: #da0037;
                }
                
                .note p {
                    margin-bottom: 0;
                }
                
                .delete-btn {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background-color: #da0037;
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    font-size: 14px;
                    cursor: pointer;
                }
            </style>
            <div class="note">
                <h2><slot name="title"></slot></h2>
                <p><slot name="body"></slot></p>
                <button class="delete-btn">X</button>
            </div>
        `;
    const deleteBtn = this.shadowRoot.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(
        "Apakah anda yakin ingin menghapus catatan ini?"
      );
      if (confirmDelete) {
        try {
          this.remove();
          const noteId = this.getAttribute("data-id");
          notesData = notesData.filter((note) => note.id !== noteId);
          localStorage.setItem("notesData", JSON.stringify(notesData));
        } catch (error) {
          console.error("Penghapusan Catatan Gagal :", error);
        }
      }
    });
  }
}

customElements.define("note-item", NoteItem);
