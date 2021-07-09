import "./Diary.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Diary = () => {
  return (
    <section className="diary">
      {/* <Calendar /> */}
      <h3 className="diary__title">Food Diary:</h3>
      <div className="diary__header">
        <div className="diary__header__calendar__buttons">
          <p className="diary__header__calendar__button">&larr;</p>
          <p className="diary__header__calendar__button">
            Thursday, July 8, 2021
          </p>
          <p className="diary__header__calendar__button">&rarr;</p>
        </div>
        <div className="diary__header__calendar__icon">
          <img
            className="calendar__icon"
            src="images/icon-calendar.png"
            alt="calendar icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Diary;
