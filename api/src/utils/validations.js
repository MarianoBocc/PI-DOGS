function validateWeigth(dog) {
  if (dog.weight.metric === "NaN") {
    return "10-50";
  } else if (dog.weight.metric.includes("NaN")) {
    const cut = dog.weight.metric.split("-");
    if (cut[0] === "NaN") return split[1];
    if (cut[1] === "NaN") return split[0];
  } else {
    return dog.weight.metric;
  }
}

function validateTemperaments(dog) {
  if (dog.temperament !== undefined) {
    return dog.temperament;
  } else {
    return "Loyal, Independent, Intelligent, Brave";
  }
}

module.exports = {
  validateTemperaments,
  validateWeigth,
};
