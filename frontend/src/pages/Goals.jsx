import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Goals.css";

const Goals = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [tdee, setTdee] = useState("");
  const [weightEdit, setWeightEdit] = useState(false);
  const [macrosEdit, setMacrosEdit] = useState(false);
  const [currentWeightInput, setCurrentWeightInput] = useState("");
  const [goalWeightInput, setGoalWeightInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [carbsInput, setCarbsInput] = useState("");
  const [proteinInput, setProteinInput] = useState("");
  const [fatInput, setFatInput] = useState("");
  const [weightError, setWeightError] = useState(null);
  const [macrosError, setMacrosError] = useState(null);
  const [error, setError] = useState(null);

  const url = "http://localhost:5000/api";

  useEffect(() => {
    const abortCont1 = new AbortController();

    fetch(`${url}/tdee/610223e0278239453cb44407`, { signal: abortCont1.signal })
      .then((result) => result.json())
      .then((json) => {
        if (json.status === "fail") {
          throw new Error(json.message);
        }
        setTdee(json.tdee);
        setError(null);
      })
      .catch((ex) => {
        if (ex.name !== "AbortError") {
          if (ex.message === "Failed to fetch") {
            setError("Database connection error. Could not retrieve goals.");
          } else {
            setError(ex.message);
          }
        }
      });

    return () => {
      abortCont1.abort();
    };
  }, []);

  useEffect(() => {
    const abortCont2 = new AbortController();

    fetch(`${url}/goals/610223e0278239453cb44407`, {
      signal: abortCont2.signal,
    })
      .then((result) => result.json())
      .then((json) => {
        if (json.status === "fail") {
          throw new Error(json.message);
        }
        setGoalWeight(json.goals.goalWeight);
        let weight = json.goals.currentWeight.length
          ? json.goals.currentWeight[json.goals.currentWeight.length - 1].weight
          : 0;
        setCurrentWeight(weight);
        setCalories(json.goals.calories);
        setCarbs(json.goals.carbs);
        setProtein(json.goals.protein);
        setFat(json.goals.fat);
        setError(null);
      })
      .catch((ex) => {
        if (ex.name !== "AbortError") {
          if (ex.message === "Failed to fetch") {
            setError("Database connection error. Could not retrieve goals.");
          } else {
            setError(ex.message);
          }
        }
      });

    return () => {
      abortCont2.abort();
    };
  }, [weightEdit, macrosEdit]);

  const updateWeight = () => {
    if (!Number(currentWeightInput) && !Number(goalWeightInput)) {
      setWeightError("Update at least one value");
      return;
    }
    if (
      (Number(currentWeightInput) && Number(currentWeightInput) < 0) ||
      (Number(goalWeightInput) && Number(goalWeightInput) < 0)
    ) {
      setWeightError("Please use positive numbers only");
      return;
    }
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(currentWeightInput && { currentWeight: currentWeightInput }),
        ...(goalWeightInput && { goalWeight: goalWeightInput }),
      }),
    };
    fetch(`${url}/goals/weight/610223e0278239453cb44407`, options)
      .then((result) => result.json())
      .then((json) => {
        if (json.status === "fail") {
          throw new Error(json.message);
        }
        setGoalWeight(json.user.goalWeight);
        let weight = json.user.currentWeight.length
          ? json.user.currentWeight[json.user.currentWeight.length - 1].weight
          : 0;
        setCurrentWeight(weight);
        setWeightError(null);
      })
      .catch((ex) => {
        if (ex.message === "Failed to fetch") {
          setWeightError("Database connection error. Try again.");
        } else {
          setWeightError(ex.message);
        }
      });

    setWeightEdit(false);
    setCurrentWeightInput("");
    setGoalWeightInput("");
  };

  const updateMacros = () => {
    if (
      !Number(caloriesInput) &&
      !Number(carbsInput) &&
      !Number(proteinInput) &&
      !Number(fatInput)
    ) {
      setMacrosError("Update at least one value");
      return;
    }
    if (Number(caloriesInput) && Number(caloriesInput) < 1200) {
      setMacrosError("Calories must be at least 1200 calories.");
      return;
    }
    if (Number(carbsInput) && Number(carbsInput) < 0) {
      setMacrosError("The percentage must be in between 0 and 100");
      return;
    }
    if (Number(proteinInput) && Number(proteinInput) < 0) {
      setMacrosError("The percentage must be in between 0 and 100");
      return;
    }
    if (Number(fatInput) && Number(fatInput) < 0) {
      setMacrosError("The percentage must be in between 0 and 100");
      return;
    }
    if (
      (Number(carbsInput) || Number(proteinInput) || Number(fatInput)) &&
      Number(carbsInput) + Number(proteinInput) + Number(fatInput) !== 100
    ) {
      setMacrosError(
        "The total sum percentage of carbs, protein, and fat must equal 100"
      );
      return;
    }

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(caloriesInput && { calories: caloriesInput }),
        ...(carbsInput && { carbs: carbsInput }),
        ...(proteinInput && { protein: proteinInput }),
        ...(fatInput && { fat: fatInput }),
      }),
    };
    fetch(`${url}/goals/macros/610223e0278239453cb44407`, options)
      .then((result) => result.json())
      .then((json) => {
        if (json.status === "fail") {
          throw new Error(json.message);
        }
        setCalories(json.user.calories);
        setCarbs(json.user.carbs);
        setProtein(json.user.protein);
        setFat(json.user.fat);
        setMacrosError(null);
      })
      .catch((ex) => {
        if (ex.message === "Failed to fetch") {
          setMacrosError("Database connection error. Try again.");
        } else {
          setMacrosError(ex.message);
        }
      });

    setMacrosEdit(false);
    setCaloriesInput("");
    setCarbsInput("");
    setProteinInput("");
    setFatInput("");
  };

  const toggleEdit = (e) => {
    if (e.target.id === "button__weight") {
      setWeightEdit(true);
    }
    if (e.target.id === "button__macros") {
      setMacrosEdit(true);
    }
    if (e.target.id === "cancel__weight") {
      setWeightEdit(false);
      setCurrentWeightInput("");
      setGoalWeightInput("");
    }
    if (e.target.id === "cancel__macros") {
      setMacrosEdit(false);
      setCaloriesInput("");
      setCarbsInput("");
      setProteinInput("");
      setFatInput("");
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "currentWeight") {
      setCurrentWeightInput(e.target.value);
    } else if (e.target.id === "goalWeight") {
      setGoalWeightInput(e.target.value);
    } else if (e.target.id === "calories") {
      setCaloriesInput(e.target.value);
    } else if (e.target.id === "carbs") {
      setCarbsInput(e.target.value);
    } else if (e.target.id === "protein") {
      setProteinInput(e.target.value);
    } else {
      setFatInput(e.target.value);
    }
  };

  return (
    <section className="goals">
      <h2 className="goals__title">Your Fitness Goals</h2>
      <p className="goals__description">
        In order to achieve your goals, you need to know your{" "}
        <strong>Total Daily Energy Expenditure</strong>. This number tells you
        how many calories your body needs to maintain its current weight. A good
        rule of thumb to follow when losing or gaining weight is to eat 500
        calories less or more than your <strong>TDEE</strong>. Over the span of
        a week, you will either lose a pound or gain a pound.
      </p>
      <p className="goals__tdee">
        Calculate your <strong>TDEE</strong>{" "}
        <Link to="/tdee-calculator">HERE</Link>
      </p>
      {tdee ? (
        <p className="goals__calculatedTDEE">
          Your TDEE is: <span>{tdee} calories</span>
        </p>
      ) : null}
      {error ? <p className="goals__error">{error}</p> : null}
      <div className="goals__tables">
        <div className="goals__tables__weight">
          <div className="goals__tables__weight__header">
            <h3 className="goals__tables__weight__header__title">Weight</h3>
            {weightEdit ? (
              <div className="goals__tables__buttons">
                <button
                  className="goals__tables__button"
                  id="cancel__weight"
                  onClick={toggleEdit}
                >
                  Cancel
                </button>
                <button
                  className="goals__tables__button"
                  onClick={updateWeight}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                className="goals__tables__button"
                id="button__weight"
                onClick={toggleEdit}
              >
                Edit
              </button>
            )}
          </div>
          <div className="goals__tables__weight__row">
            <p className="goals__tables__weight__key">
              <strong>Current Weight</strong>
            </p>
            {weightEdit ? (
              <input
                type="number"
                className="goals__tables__input"
                placeholder="lbs"
                id="currentWeight"
                onChange={handleChange}
                value={currentWeightInput}
              />
            ) : (
              <p className="goals__tables__weight__value">
                {currentWeight} lbs
              </p>
            )}
          </div>
          <div className="goals__tables__weight__row">
            <p className="goals__tables__weight__key">
              <strong>Goal Weight</strong>
            </p>
            {weightEdit ? (
              <input
                type="number"
                className="goals__tables__input"
                placeholder="lbs"
                id="goalWeight"
                onChange={handleChange}
                value={goalWeightInput}
              />
            ) : (
              <p className="goals__tables__weight__value">{goalWeight} lbs</p>
            )}
          </div>
        </div>
        {weightError ? <p className="goals__error">{weightError}</p> : null}
        <div className="goals__tables__calories">
          <div className="goals__tables__calories__header">
            <h3 className="goals__tables__calories__header__title">
              Daily Nutrition
            </h3>
            {macrosEdit ? (
              <div className="goals__tables__buttons">
                <button
                  className="goals__tables__button"
                  id="cancel__macros"
                  onClick={toggleEdit}
                >
                  Cancel
                </button>
                <button
                  className="goals__tables__button"
                  onClick={updateMacros}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                className="goals__tables__button"
                onClick={toggleEdit}
                id="button__macros"
              >
                Edit
              </button>
            )}
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Calories</strong>
            </p>
            {macrosEdit ? (
              <input
                type="number"
                className="goals__tables__input"
                placeholder="kcal"
                id="calories"
                onChange={handleChange}
                value={caloriesInput}
              />
            ) : (
              <p className="goals__tables__calories__value">{calories}</p>
            )}
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Carbohydrates</strong>{" "}
              <span>{`${Math.round((carbs / 100) * calories)} g`}</span>
            </p>
            {macrosEdit ? (
              <input
                type="number"
                className="goals__tables__input"
                placeholder="%"
                id="carbs"
                onChange={handleChange}
                value={carbsInput}
              />
            ) : (
              <p className="goals__tables__calories__value">{`${carbs}%`}</p>
            )}
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Protein</strong>{" "}
              <span>{`${Math.round((protein / 100) * calories)} g`}</span>
            </p>
            {macrosEdit ? (
              <input
                type="number"
                className="goals__tables__input"
                placeholder="%"
                id="protein"
                onChange={handleChange}
                value={proteinInput}
              />
            ) : (
              <p className="goals__tables__calories__value">{`${protein}%`}</p>
            )}
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Fat</strong>{" "}
              <span>{`${Math.round((fat / 100) * calories)} g`}</span>
            </p>
            {macrosEdit ? (
              <input
                type="number"
                className="goals__tables__input"
                placeholder="%"
                id="fat"
                onChange={handleChange}
                value={fatInput}
              />
            ) : (
              <p className="goals__tables__calories__value">{`${fat}%`}</p>
            )}
          </div>
        </div>
        {macrosError ? <p className="goals__error">{macrosError}</p> : null}
      </div>
    </section>
  );
};

export default Goals;
