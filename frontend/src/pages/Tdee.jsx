import "./Tdee.css";
import { useState } from "react";

const Tdee = () => {
  const [calculated, setCalculated] = useState(false);
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [feet, setFeet] = useState(null);
  const [inches, setInches] = useState(null);
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
  };

  const handleChange = (e) => {
    console.log(e.target);
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
        setInches(e.target.value);
      }
    }
  };

  const calculate = (gender) => {
    if (age < 1 || age > 120) {
      return;
    }
    if (weight <= 0 || weight > 1000) {
      return;
    }
    if (feet <= 0 || feet > 8) {
      return;
    }
    if (inches < 0 || inches >= 12) {
      return;
    }

    const kgs = weight * 0.45359237;
    const height = feet * 30.48 + inches * 2.54;
    const genderConstant = gender === "male" ? 88.362 : 447.593;
    const bmr = genderConstant + 13.397 * kgs + 4.799 * height - age;

    console.log(bmr);
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
      <form className="tdee__form" onSubmit={handleSubmit}>
        <div className="tdee__form__gender form__caption">
          <strong>Gender</strong>
          <div className="tdee__form__gender__genders" onChange={handleChange}>
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
            <input type="number" placeholder="years" onChange={handleChange} />
          </label>
        </div>
        <div className="tdee__form__weight form__caption">
          <strong>Weight</strong>
          <label>
            <input type="number" placeholder="lbs" onChange={handleChange} />
          </label>
        </div>
        <div className="tdee__form__height form__caption">
          <strong>Height</strong>
          <label>
            <input type="number" placeholder="feet" onChange={handleChange} />
          </label>
          <label>
            <input type="number" placeholder="inches" onChange={handleChange} />
          </label>
        </div>
        <div className="tdee__form__activity">
          <strong>Activity</strong>
          <select name="activity" defaultValue="light">
            <option value="sedentary">Sedentary (office job)</option>
            <option value="light">Light Exercise (1-2 days/week)</option>
            <option value="moderate">Moderate Exercise (3-5 days/week)</option>
            <option value="heavy">Heavy Exercise (6-7 days/week)</option>
            <option value="athlete">Athlete (2x per day)</option>
          </select>
        </div>
        <button className="tdee__form__submit">Calculate</button>
      </form>
      <div className="tdee__results">
        <div className="tdee__results__maintenance">
          <h3 className="tdee__results__maintenance__title">
            Your Maintenance Calories
          </h3>
          <div className="tdee__results__maintenance__calories">
            <p className="tdee__results__maintenance__cpd">
              <strong>2,684</strong>
              <span>calories per day</span>
            </p>
            <div className="divider"></div>
            <p className="tdee__results__maintenance__cpw">
              <strong>18,787</strong>
              <span>calories per week</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tdee;
