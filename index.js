// 1
const categories = document.querySelectorAll("ul#categories > li");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});
// 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector('[data-list="ingredients"]'); // Використовуємо data-атрибут
const ingredientItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...ingredientItems);
// 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('[data-gallery="images"]'); // Використовуємо data-атрибут
const markup = images
  .map(
    ({ url, alt }) =>
      `<li style="list-style: none; margin: 10px;">
           <img src="${url}" alt="${alt}" style="display: block; width: 100%; max-width: 300px; height: auto;"/>
         </li>`
  )
  .join("");

gallery.style.display = "flex";
gallery.style.gap = "20px";
gallery.style.flexWrap = "wrap";
gallery.insertAdjacentHTML("beforeend", markup);
// 4
let counterValue = 0;

const counter = document.querySelector("[data-counter]");
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueElement = counter.querySelector("[data-value]");

const updateValue = () => {
  valueElement.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateValue();
};

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
