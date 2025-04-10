export async function fetchApi() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const resolve = await response.json();
  return resolve;
}
export async function fetchApiDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  const resolve = await response.json();
  return resolve;
}
export async function fetchApiFoodsCategory() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const resolve = await response.json();
  const returnMeals = resolve.meals;
  return returnMeals;
}
export async function fetchApiDrinksCategory() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const resolve = await response.json();
  const returnDrinks = resolve.drinks;
  return returnDrinks;
}
export async function fetchFoodByCategory(categoryName) {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const response = await fetch(`${URL}${categoryName}`);
  const resolve = await response.json();
  const returnFoods = resolve.meals;
  return returnFoods;
}
export async function fetchDrinksByCategory(categoryName) {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const response = await fetch(`${URL}${categoryName}`);
  const resolve = await response.json();
  const returnDrinks = resolve.drinks;
  return returnDrinks;
}
