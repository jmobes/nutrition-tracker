import "./Tdee.css";
import { useState, useEffect } from "react";

const Tdee = () => {
  const [calculated, setCalculated] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [activity, setActivity] = useState("light");
  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(false);

  const url = "http://localhost:5000/api";

  useEffect(() => {
    if (calculated) {
      fetch(`${url}/tdee/60fd1eceef841b3e8820c66f`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tdee: calculated }),
      })
        .then((result) => result.json())
        .then((json) => {
          if (json.status === "fail") {
            throw new Error(json.message);
          }
          setError(null);
          setUpdated(true);
        })
        .catch((ex) => {
          if (ex.message.toLowerCase() === "failed to fetch") {
            setError("Database connection error. Please try again.");
          } else {
            setError(ex.message);
          }
        });
    }
  }, [calculated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdated(false);
    calculate();
  };

  const handleChange = (e) => {
    if (e.target.type === "radio") {
      setGender(e.target.value);
    } else if (e.target.type === "number") {
      if (e.target.placeholder === "years") {
        setAge(e.target.value);
      }
      if (e.target.placeholder === "lbs") {
        setWeight(e.target.value);
      }
      if (e.target.placeholder === "feet") {
        setFeet(e.target.value);
      }
      if (e.target.placeholder === "inches") {
        if (e.target.value > 11 || e.target.value < 0) {
          return;
        }
        setInches(e.target.value);
      }
    } else {
      setActivity(e.target.value);
    }
  };

  const calculate = () => {
    if (age < 1 || age > 100) {
      setError("Age must be in between 1 and 100 years.");
      return;
    }
    if (weight <= 50 || weight > 1000) {
      setError("Weight must be in between 50 and 1000 lbs.");
      return;
    }
    if (feet <= 2 || feet > 9) {
      setError("Weight must be in between 2 and 9 feet.");
      return;
    }
    if (inches < 0 || inches >= 12) {
      setError("Weight must be in between 0 and 11 inches.");
      return;
    }

    const kgs = weight * 0.45359237;
    const height = feet * 30.48 + inches * 2.54;
    const genderConstant = calculateConstants(gender);
    const bmr =
      genderConstant.constant +
      genderConstant.weight * kgs +
      genderConstant.height * height -
      genderConstant.age * age;

    setCalculated(Math.ceil(bmr * calculateActivityConstant()));
    return calculated;
  };

  const calculateConstants = () => {
    return gender === "male"
      ? { constant: 88.362, weight: 13.397, height: 4.799, age: 5.677 }
      : { constant: 447.593, weight: 9.247, height: 3.096, age: 4.33 };
  };

  const calculateActivityConstant = () => {
    if (activity === "sedentary") return 1.2;
    else if (activity === "light") return 1.375;
    else if (activity === "moderate") return 1.55;
    else if (activity === "heavy") return 1.725;
    else return 1.9;
  };

  return (
    <div className="tdee">
      <h2 className="tdee__title">
        Learn How Many Calories You Burn Every Day
      </h2>
      <p className="tdee__description">
        This calculator will measure your{" "}
        <strong>Total Daily Energy Expenditure</strong>, an <em>estimation</em>{" "}
        of how many calories you burn per day. This number is important while
        dieting to figure out how many calories you should eat to reach your
        goals.
      </p>
      {error ? <p className="tdee__error">{error}</p> : null}
      <form className="tdee__form" onSubmit={handleSubmit}>
        <div className="tdee__form__gender form__caption">
          <strong>Gender</strong>
          <div
            className="tdee__form__gender__genders"
            onChange={handleChange}
            required
          >
            <label htmlFor="male">Male</label>
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              defaultChecked
            />
            <label htmlFor="female">Female</label>
            <input id="female" type="radio" name="gender" value="female" />
          </div>
        </div>
        <div className="tdee__form__age form__caption">
          <strong>Age</strong>
          <label>
            <input
              type="number"
              placeholder="years"
              onChange={handleChange}
              required
              value={age}
            />
          </label>
        </div>
        <div className="tdee__form__weight form__caption">
          <strong>Weight</strong>
          <label>
            <input
              type="number"
              placeholder="lbs"
              onChange={handleChange}
              required
              value={weight}
            />
          </label>
        </div>
        <div className="tdee__form__height form__caption">
          <strong>Height</strong>
          <label>
            <input
              type="number"
              placeholder="feet"
              onChange={handleChange}
              required
              value={feet}
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="inches"
              onChange={handleChange}
              value={inches}
            />
          </label>
        </div>
        <div className="tdee__form__activity">
          <strong>Activity</strong>
          <select
            name="activity"
            onChange={handleChange}
            value={activity}
            required
          >
            <option value="sedentary">Sedentary (office job)</option>
            <option value="light">Light Exercise (1-2 days/week)</option>
            <option value="moderate">Moderate Exercise (3-5 days/week)</option>
            <option value="heavy">Heavy Exercise (6-7 days/week)</option>
            <option value="athlete">Athlete (2x per day)</option>
          </select>
        </div>
        <button className="tdee__form__submit">Calculate</button>
        {updated ? (
          <p className="tdee__success">Your TDEE was updated.</p>
        ) : null}
      </form>
      {calculated ? (
        <div className="tdee__results">
          <div className="tdee__results__maintenance">
            <h3 className="tdee__results__maintenance__title">
              Your Maintenance Calories
            </h3>
            <div className="tdee__results__maintenance__calories">
              <p className="tdee__results__maintenance__cpd">
                <strong>{calculated}</strong>
                <span>calories per day</span>
              </p>
              <div className="divider"></div>
              <p className="tdee__results__maintenance__cpw">
                <strong>{`${calculated * 7}`}</strong>
                <span>calories per week</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Tdee;
