# Mov(e)ster — Разпределение на задачите

Екип (Buddy Group 2): **Димитър**, **Иво**, **Людмил**

Проектът изисква имплементация на **15 функции** (README, раздел 10) в 3 категории —
**view** (template), **event** (логика), **request** (data service) — плюс "лепилото":
`index.js` wiring, нови константи, CSS стилове и имена на екипа в About.

Разпределението е на **вертикални feature-слайсове**, така че всеки покрива поне
2 от 3-те типа функции, както изисква README ("at least two of the three").

> Всеки стилизира (CSS) своя view. Работете в отделни branch-ове и правете PR-и,
> за да няма конфликти. Не забравяйте да триете временните файлове накрая.

---

## Димитър — 4 задачи

| # | Задача | Функции | Файлове |
|---|--------|---------|---------|
| 1 | **Categories списък** | `loadCategories()`, `renderCategories()`, `toSingleCategoryView(category)` | `request-service.js`, `navigation-events.js`, `category-view.js` |
| 2 | **Навигация (ядро)** | довършване на `loadPage(page)` switch — case-ове за categories / favorites / about | `navigation-events.js` |
| 3 | **About** | `renderAbout()` + смяна на имената на екипа | `navigation-events.js`, `about-view.js` |
| 4 | **Wiring / glue** | запълване на празнините в `index.js` (button класове + `data-` атрибути) + нужните нови константи | `index.js`, `common/constants.js` |

## Иво — 3 задачи

| # | Задача | Функции | Файлове |
|---|--------|---------|---------|
| 5 | **Филми в категория** | `loadMovies(categoryId)`, `renderCategory(categoryId)` | `request-service.js`, `navigation-events.js` |
| 6 | **Проста филмова карта** | `toMovieSimple(movie)` — използва се от category / favorites / search | `movie-views.js` |
| 7 | **Favorites** | `renderFavorites()` (view-то е готово, зависи от `loadMovies` / favorites data) | `navigation-events.js` |

## Людмил — 3 задачи

| # | Задача | Функции | Файлове |
|---|--------|---------|---------|
| 8 | **Детайли за филм** | `loadSingleMovie(id)`, `renderMovieDetails(id)` | `request-service.js`, `navigation-events.js` |
| 9 | **Детайлна филмова карта** | `toSingleMovieView(movie)` + `toMovieDetailed(movie)` | `movie-views.js` |
| 10 | **Търсене** | `loadSearchMovies(searchTerm)`, `renderSearchItems(searchTerm)` | `request-service.js`, `search-events.js` |

---

## Покритие на типовете (README изискване)

| Член | view | event | request |
|------|:----:|:-----:|:-------:|
| Димитър | ✅ | ✅ | ✅ |
| Иво | ✅ | ✅ | ✅ |
| Людмил | ✅ | ✅ | ✅ |

## Съвети (от README, раздел 9)

- Използвайте template strings и array методи (`map` / `filter` / `reduce`).
- Без magic strings/числа — ползвайте константи от `common/constants.js`.
- Пазете `data/` слоя непокътнат — достъпвайте данните само през `request-service.js`.
- Функциите да са single-responsibility, кодът кратък и четим.
- Стартиране: в `template/` папката пуснете `live-server` (глобално инсталиран).
