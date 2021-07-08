import "./Tdee.css";
import { useState } from "react";

const Tdee = () => {
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
      <form className="tdee__form">
        <div className="tdee__form__gender">
          <strong>Gender</strong>
          <label htmlFor="male">Male</label>
          <input id="male" type="radio" name="gender" value="male" checked />
          <label htmlFor="female">Female</label>
          <input id="female" type="radio" name="gender" value="female" />
        </div>
      </form>
    </div>
  );
};

export default Tdee;
