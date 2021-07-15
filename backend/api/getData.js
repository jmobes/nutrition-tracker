const fetch = require("node-fetch");
require("dotenv").config();

async function foodSearch(foodString) {
  const food_search_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.API_KEY}&query=${foodString}&dataType=Foundation&pageSize=25&sortBy=lowercaseDescription.keyword&sortOrder=asc`;
  let list;
  try {
    const res = await fetch(food_search_url);
    list = await res.json();
    console.log(list);
  } catch (err) {
    console.error(err);
  }
}

async function foodData(foodId) {
  const food_data_url = `https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${process.env.API_KEY}`;
  let nutrients;
  try {
    const res = await fetch(food_data_url);
    nutrients = await res.json();
  } catch (err) {
    console.error(err);
  }
  return nutrients;
}

console.log(foodSearch("cheese"));
