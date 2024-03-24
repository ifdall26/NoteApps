class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
              header {
                  background-color: #007bff;
                  color: #fff;
                  padding: 10px 20px;
                  text-align: center;
              }
              
              h1 {
                  margin: 0;
              }
          </style>
          <header>
              <h1><slot></slot></h1>
          </header>
      `;
  }
}

customElements.define("app-header", AppHeader);
