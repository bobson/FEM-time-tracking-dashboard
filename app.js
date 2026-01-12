import { ActivityCard } from "./components/ActivityCard.js";
import ProfileCard from "./components/ProfileCard.js";

import getData from "./services/API.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  app.store.data = await getData();

  const cardsContainer = document.querySelector("main");
  app.store.data.forEach((item) => {
    const card = document.createElement("activity-card");
    card.dataset.card = JSON.stringify(item);
    cardsContainer.appendChild(card);
  });
});
