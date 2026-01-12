const Store = {
  data: null,
  timeframe: "daily",
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    if (target[property] === value) return true;

    target[property] = value;

    if (property == "timeframe") {
      window.dispatchEvent(new Event("timeframechange"));
    }
    return true;
  },
  get(target, property) {
    return target[property];
  },
});

export default proxiedStore;
