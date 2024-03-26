class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          header {
            background-color: #171717;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
            position : fixed;
            width : 100%;
            height : 50px;
            top : 0;
            box-shadow : 0px 5px 10px 5px rgba(255, 255, 255, .3);
            z-index: 1000;
          }
          
          h1 {
            margin: 0;
            line-height : 50px;
          }
        </style>
        <header>
          <h1><slot></slot></h1>
        </header>
      `;
  }
}

customElements.define("app-header", AppHeader);
