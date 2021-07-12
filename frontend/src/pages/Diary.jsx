import "./Diary.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Diary = () => {
  return (
    <section className="diary">
      <h3 className="diary__title">Food Diary</h3>
      <p className="diary__description">
        Logging the food you eat is key to knowing how many calories you are
        consuming. Make it a habit to track your calories and reach your long
        term goals.
      </p>
      <div className="diary__header">
        <div className="diary__header__calendar__icon">
          <i class="far fa-calendar-alt"></i>
        </div>
        <div className="diary__header__calendar__buttons">
          <i class="diary__header__calendar__button fas fa-long-arrow-alt-left"></i>
          <p className="calendar__day">Thursday, July 8, 2021</p>
          <i class="diary__header__calendar__button fas fa-long-arrow-alt-right"></i>
        </div>
        {/* <div className="diary__calendar">
          <Calendar />
        </div> */}
      </div>
      <div className="diary__meals">
        <div className="diary__meal">
          <h4 className="diary__meal__title">Breakfast</h4>
          <div className="diary__meal__table">
            <div className="diary__meal__table__header">
              <p className="diary__meal__table__header__item">Name</p>
              <p className="diary__meal__table__header__item">Calories</p>
              <p className="diary__meal__table__header__item">Carbs</p>
              <p className="diary__meal__table__header__item">Protein</p>
              <p className="diary__meal__table__header__item">Fat</p>
            </div>
            <div className="diary__meal__table__food">
              <div className="diary__meal__table__food__row">
                <p className="diary__meal__table__food__row">
                  Skippy Peanut Butter
                </p>
                <p className="diary__meal__table__food__row">190</p>
                <p className="diary__meal__table__food__row">7</p>
                <p className="diary__meal__table__food__row">7</p>
                <p className="diary__meal__table__food__row">16</p>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diary;
