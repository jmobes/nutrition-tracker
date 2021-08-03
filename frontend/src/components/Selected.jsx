import { useState } from "react";

const Selected = (props) => {
  const [servings, setServings] = useState("1");
  const [meal, setMeal] = useState("breakfast");

  const selected = props.selected;

  return (
    <div className="add__selected">
      <h4 className="add__selected__name">{selected.description}</h4>
      <div className="add__serving__size">
        <strong>Serving Size: </strong>
        <span>100g</span>
      </div>
      <div className="add__selected__macros">
        <div className="add__selected__macro">
          <strong>Calories</strong>
          <p>{`${Math.round(selected.foodNutrients[2].amount)} calories`}</p>
        </div>
        <div className="add__selected__macro">
          <strong>Carbs</strong>
          <p>{`${Math.round(selected.foodNutrients[3].amount)}g`}</p>
        </div>
        <div className="add__selected__macro">
          <strong>Protein</strong>
          <p>{`${Math.round(selected.foodNutrients[0].amount)}g`}</p>
        </div>
        <div className="add__selected__macro">
          <strong>Fat</strong>
          <p>{`${Math.round(selected.foodNutrients[1].amount)}g`}</p>
        </div>
      </div>
      <form className="add__selected__form">
        <div className="add__selected__form__servings">
          <strong>How many servings?</strong>
          <label>
            <input
              name="servings"
              type="number"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </label>
        </div>
        <div className="add__selected__form__meal">
          <strong>To which meal?</strong>
          <select name="meal" value={meal} onChange={(e) => e.target.value}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
        <button>Add To Diary</button>
      </form>
    </div>
  );
};

export default Selected;
