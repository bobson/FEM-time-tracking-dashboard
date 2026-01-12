export default class ProfileCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tp = document.getElementById("profile-card-template");
    const content = tp.content.cloneNode(true);
    this.appendChild(content);
    this.classList.add("header-card");

    const nav = this.querySelectorAll(".header-card__tabs button");
    nav.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        nav.forEach((el) => {
          el.ariaSelected = "false";
          el.tabIndex = "-1";
        });
        btn.ariaSelected = "true";
        btn.tabIndex = "0";
        app.store.timeframe = e.target.textContent.toLowerCase().trim();
      });
    });
  }
}

customElements.define("profile-card", ProfileCard);
