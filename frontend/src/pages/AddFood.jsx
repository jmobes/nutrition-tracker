import { useState, useEffect } from "react";
import "./AddFood.css";
import Selected from "../components/Selected";

const AddFood = () => {
  const [search, setSearch] = useState("");
  const [foodList, setFoodList] = useState(null);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  const url = "http://localhost:5000/api/food";

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      setError("Please type in a food");
      return;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ food: search }),
    })
      .then((result) => result.json())
      .then((list) => {
        console.log(list);
        setFoodList(list.foods.foods);
      })
      .catch((ex) => {
        console.error(ex.message);
        setError(ex.message);
      });
  };

  const handleClick = (foodId) => {
    fetch(`${url}/${foodId}`)
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
        setSelected(info.foodInfo);
      })
      .catch((ex) => {
        console.error(ex.message);
        setError(ex.message);
      });
  };

  return (
    <section className="add">
      <h3 className="add__title">Add Food To Diary</h3>
      <div className="add__input">
        <strong>Search food by name</strong>
        <label>
          <input type="text" onChange={handleChange} value={search} />
        </label>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {foodList ? (
        <div className="add__matching">
          <h4 className="add__matching__title">Matching Foods:</h4>
          <div className="add__matching__foods">
            {foodList.map((food) => {
              return (
                <div
                  key={food.fdcId}
                  className="add__matching__food"
                  onClick={() => handleClick(food.fdcId)}
                >
                  <h5 className="add__matching__food__name">
                    {food.description}
                  </h5>
                  <p className="add__matching__food__description">
                    {`100g, ${Math.round(
                      food.foodNutrients[0].value
                    )} calories`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {selected ? <Selected selected={selected} /> : null}
      {/* <div className="add__selected">
        <h4 className="add__selected__name">Sirloin Steak</h4>
        <div className="add__serving__size">
          <strong>Serving Size: </strong>
          <span>100g</span>
        </div>
        <div className="add__selected__macros">
          <div className="add__selected__macro">
            <strong>Calories</strong>
            <p>250 calories</p>
          </div>
          <div className="add__selected__macro">
            <strong>Carbs</strong>
            <p>3g</p>
          </div>
          <div className="add__selected__macro">
            <strong>Protein</strong>
            <p>20g</p>
          </div>
          <div className="add__selected__macro">
            <strong>Fat</strong>
            <p>15g</p>
          </div>
        </div>
        <form className="add__selected__form">
          <div className="add__selected__form__servings">
            <strong>How many servings?</strong>
            <label>
              <input name="servings" type="number" value="1" />
            </label>
          </div>
          <div className="add__selected__form__meal">
            <strong>To which meal?</strong>
            <select name="meal">
              <option value="breakfast" selected>
                Breakfast
              </option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          <button>Add To Diary</button>
        </form>
      </div> */}
    </section>
  );
};

export default AddFood;
