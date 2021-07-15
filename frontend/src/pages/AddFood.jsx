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
    </section>
  );
};

export default AddFood;
