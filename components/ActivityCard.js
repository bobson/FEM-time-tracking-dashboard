export class ActivityCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("card-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    // this.classList.add("card");

    this.currentHrsEl = this.querySelector(".card__description-current");
    this.pastHrsEl = this.querySelector(".card__description-last");

    window.addEventListener("timeframechange", () => this.render());

    this.renderOnce();
  }

  renderOnce() {
    const cardData = JSON.parse(this.dataset.card);
    const title = cardData.title.toLowerCase().replaceAll(" ", "-");

    this.cardData = cardData; // 🔹 cache parsed data

    this.querySelector(".card").style.backgroundColor = `var(--${title})`;
    this.querySelector(".card__image img").src = `./images/icon-${title}.svg`;
    this.querySelector(".card__title-text").textContent = cardData.title;

    this.render();
  }

  render() {
    const tf = app.store.timeframe;

    const lastMap = {
      daily: "Day",
      weekly: "Week",
      monthly: "Month",
    };

    this.currentHrsEl.textContent = `${this.cardData.timeframes[tf].current}hrs`;

    this.pastHrsEl.textContent = `Last ${lastMap[tf]} - ${this.cardData.timeframes[tf].previous}hrs`;

    this.animateChange(this.currentHrsEl);
  }

  animateChange(el) {
    el.classList.remove("tf-change");
    void el.offsetWidth; // force reflow
    el.classList.add("tf-change");
  }
}

customElements.define("activity-card", ActivityCard);
