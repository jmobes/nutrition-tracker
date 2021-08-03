import { useState, useEffect } from "react";

const Selected = (props) => {
  const [servings, setServings] = useState("1");
  const [meal, setMeal] = useState("breakfast");
  const [macros, setMacros] = useState(null);

  const selected = props.selected;
  const findMacros = () => {
    let macrosArray = selected.foodNutrients;
    let macrosObject = {};
    macrosArray.forEach((macro) => {
      console.log(macro);
      if (macro.name.toLowerCase() === "energy") {
        macrosObject.calories = Math.round(macro.amount);
      } else if (macro.name.toLowerCase() === "carbohydrate, by difference") {
        macrosObject.carbs = Math.round(macro.amount);
      } else if (macro.name.toLowerCase() === "protein") {
        macrosObject.protein = Math.round(macro.amount);
      } else {
        macrosObject.fat = Math.round(macro.amount);
      }
    });
    setMacros(macrosObject);
  };

  useEffect(() => {
    findMacros();
  }, [selected]);

  return macros ? (
    <div className="add__selected">
      <h4 className="add__selected__name">{selected.description}</h4>
      <div className="add__serving__size">
        <strong>Serving Size: </strong>
        <span>100g</span>
      </div>
      <div className="add__selected__macros">
        <div className="add__selected__macro">
          <strong>Calories</strong>
          <p>{`${macros.calories} calories`}</p>
        </div>
        <div className="add__selected__macro">
          <strong>Carbs</strong>
          <p>{`${macros.carbs}g`}</p>
        </div>
        <div className="add__selected__macro">
          <strong>Protein</strong>
          <p>{`${macros.protein}g`}</p>
        </div>
        <div className="add__selected__macro">
          <strong>Fat</strong>
          <p>{`${macros.fat}g`}</p>
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
  ) : null;
};

export default Selected;
