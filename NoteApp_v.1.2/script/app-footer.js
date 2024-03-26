class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          footer {
            background-color: #171717;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
            position : fixed;
            width : 100%;
            height : 50px;
            bottom : 0;
            box-shadow : 0px -5px 10px 5px rgba(255, 255, 255, .3);
            z-index: 1000;
          }
          
          p {
            margin: 0;
            line-height : 50px;
          }
        </style>
        <footer>
          <p>&copy; 2024,  Ifdal lisyukri</p>
        </footer>
      `;
  }
}

customElements.define("app-footer", AppFooter);
