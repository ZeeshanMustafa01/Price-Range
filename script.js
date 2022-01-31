"use strict";
const priceInputs = document.querySelectorAll(".price-input");
const progress = document.querySelector(".progress");
const range = document.querySelectorAll(".range");

const priceGap = 5;

// change input range with price inputs
priceInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const target = e.target;
    let minPrice = +priceInputs[0].value;
    let maxPrice = +priceInputs[1].value;

    if (maxPrice - minPrice >= priceGap && maxPrice <= priceInputs[1].max) {
      // min-price
      if (target.classList.contains("price-min")) {
        range[0].value = minPrice;
        progress.style.left = (minPrice / priceInputs[1].max) * 100 + "%";
        //   max-price
      } else if (target.classList.contains("price-max")) {
        range[1].value = maxPrice;
        progress.style.right =
          100 - (maxPrice / priceInputs[1].max) * 100 + "%";
      }
    }
  });
});

// change price with range slider
range.forEach((input) => {
  input.addEventListener("input", (e) => {
    const target = e.target;
    let minPrice = range[0].value;
    let maxPrice = range[1].value;

    if (maxPrice - minPrice >= priceGap) {
      if (target.classList.contains("range-min")) {
        priceInputs[0].value = minPrice;
        progress.style.left = (minPrice / priceInputs[1].max) * 100 + "%";
        // max-price
      } else if (target.classList.contains("range-max")) {
        priceInputs[1].value = maxPrice;
        progress.style.right =
          100 - (maxPrice / priceInputs[1].max) * 100 + "%";
      }
    } else {
      range[0].value = priceInputs[0].value;
      range[1].value = priceInputs[1].value;
    }
  });
});
