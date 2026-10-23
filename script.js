"use strict";

// Элементы уже найдены. Их НЕ нужно искать повторно.
const rocket = document.querySelector("#rocket");
const rocketIcon = document.querySelector("#rocket-icon");
const moveButton = document.querySelector("#move-button");
const colorButton = document.querySelector("#color-button");
const jumpButton = document.querySelector("#jump-button");
const resetButton = document.querySelector("#reset-button");
const status = document.querySelector("#status");

// ЗАДАНИЕ 1. Кнопка «Переместить».
moveButton.addEventListener("click", () => {
  rocket.classList.toggle("is-moved");
  status.textContent = "ОНО ПЕРЕМЕСТИЛОСЬ!!!";
});

// ЗАДАНИЕ 2. Кнопка «Сменить цвет».
colorButton.addEventListener("click", () => {
  rocket.classList.toggle("is-colored")
  status.textContent = "ОНО ЗЕЛЁНОЕ!!!";
});

// ЗАДАНИЕ 3. Кнопка «Подпрыгнуть».
jumpButton.addEventListener("click", () => {
  rocketIcon.animate(
     [
      { transform: "translateY(0)" },
      { transform: "translateY(-70px)" },
      { transform: "translateY(0)" }
    ],
    { duration: 900, easing: "ease-in-out" }
  );
  status.textContent = "ОНО ПРЫГНУЛО!!!";
});

// ЗАДАНИЕ 4. Кнопка «Сбросить».
resetButton.addEventListener("click", () => {
  rocket.classList.remove("is-moved", "is-colored")
  status.textContent = "Вы сброшены";
});
