// Запуск игры
// - создать элемент и добавить его на страницу
// - создать на этом элементе игру с помощью `createLife` с размерами поля x / y
import { createGameOfLife } from "./createLifeCell";
// - для проверки своего кода можно создать еще один элемент и создать вторую игру на этой же странице
const gameWrapper2 = document.createElement("div");
document.body.appendChild(gameWrapper2);

createGameOfLife(10, 10, gameWrapper2);
