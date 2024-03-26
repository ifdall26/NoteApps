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
                    margin-bottom: 20px;
                    overflow-wrap: break-word;
                    position: relative;
                    z-index : 1;
                }

                .note:hover {
                    box-shadow: 0px -2px 3px 1px rgba(234, 234, 234, 0.5),
                      0px -4px 6px 3px rgba(234, 234, 234, 0.5),
                      0px -6px 9px 5px rgba(234, 234, 234, 0.5);
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
