export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<div class="category">
  <h2>${category.name}</h2>
  <p>${category.moviesCount} movies:</p>
  <button class="buttonCategories" data-category-id="${category.id}">Show movies</button>
  </div>
`;
