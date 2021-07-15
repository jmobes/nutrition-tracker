import "./AddFood.css";

const AddFood = () => {
  return (
    <section className="add">
      <h3 className="add__title">Add Food To Diary</h3>
      <div className="add__input">
        <strong>Search food by name</strong>
        <label>
          <input type="text" />
        </label>
        <button>Search</button>
      </div>
      <div className="add__matching">
        <h4 className="add__matching__title">Matching Foods:</h4>
        <div className="add__matching__foods">
          <div className="add__matching__food">
            <h5 className="add__matching__food__name">Steak</h5>
            <p className="add__matching__food__description">
              Deer Steak, 100g, 170 calories
            </p>
          </div>
          <div className="add__matching__food">
            <h5 className="add__matching__food__name">Steak</h5>
            <p className="add__matching__food__description">
              Elk Steak, 100g, 190 calories
            </p>
          </div>
          <div className="add__matching__food">
            <h5 className="add__matching__food__name">Steak</h5>
            <p className="add__matching__food__description">
              Ribeye Steak, 100g, 100 calories
            </p>
          </div>
          <div className="add__matching__food">
            <h5 className="add__matching__food__name">Steak</h5>
            <p className="add__matching__food__description">
              T-Bone Steak, 100g, 300 calories
            </p>
          </div>
          <div className="add__matching__food">
            <h5 className="add__matching__food__name">Steak</h5>
            <p className="add__matching__food__description">
              Sirloin Steak, 100g, 250 calories
            </p>
          </div>
        </div>
      </div>
      <div className="add__selected">
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
      </div>
    </section>
  );
};

export default AddFood;
