import {
  createSiteMenuTemplate
} from './view/site-menu.js';

import {
  createMovieCardTemplate
} from './view/movie-card.js';

import {
  createUserTitleTemplate
} from './view/user-title';

import {
  createShowMoreButtonTemplate
} from './view/show-more-button';

import {
  createPopupTemplate
} from './view/popup';

import {
  createFilmsContainerTemplate
} from './view/films-container';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Звание пользователя;
const siteHeaderElement = document.querySelector('.header');
render(siteHeaderElement, createUserTitleTemplate(), 'beforeend');

// Меню (фильтры и статистика);
const siteMainElement = document.querySelector('.main');
render(siteMainElement, createSiteMenuTemplate(), 'afterbegin');

// Контейнер
render(siteMainElement, createFilmsContainerTemplate(), 'beforeend');

// Карточка фильма (в списке);
const filmsListContainer = siteMainElement.querySelector('.films-list__container');
const FILMS_COUNT = 5;
for (let i = 0; i < FILMS_COUNT; i++) {
  render(filmsListContainer, createMovieCardTemplate(), 'beforeend');
}

// Кнопка «Show more»;
const filmsList = siteMainElement.querySelector('.films-list');
render(filmsList, createShowMoreButtonTemplate(), 'beforeend');

//«Карточка фильма» отрисовывается в блоках «Top rated movies» и «Most commented»,
// по две карточки в каждом блоке
const filmsListExtra = siteMainElement.querySelectorAll('.films-list--extra');
for (let i = 0; i < filmsListExtra.length; i++) {
  const filmsListContainerExtra = filmsListExtra[i].querySelector('.films-list__container');
  const FILMS_COUNT_EXTRA = 2;
  for (let i = 0; i < FILMS_COUNT_EXTRA; i++) {
    render(filmsListContainerExtra, createMovieCardTemplate(), 'beforeend');
  }
}

// Подробная информация о фильме (попап).
const siteFooterElement = document.querySelector('.footer');
render(siteFooterElement, createPopupTemplate(), 'afterend');
