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
              }
              
              .note h2 {
                  margin-top: 0;
                  color: #da0037;
              }
              
              .note p {
                  margin-bottom: 0;
              }
          </style>
          <div class="note">
              <h2><slot name="title"></slot></h2>
              <p><slot name="body"></slot></p>
          </div>
      `;
  }
}

customElements.define("note-item", NoteItem);
