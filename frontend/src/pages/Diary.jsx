import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Diary.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Diary = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [diary, setDiary] = useState(null);
  const [goals, setGoals] = useState(null);
  const [theDate, setDate] = useState(new Date().toDateString());

  const url = "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${url}/goals/60fd1eceef841b3e8820c66f`)
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        setGoals(json.goals);
      })
      .catch((ex) => console.error(ex.message));

    const today = new Date().toDateString();
    fetch(`${url}/diary/60fd1eceef841b3e8820c66f/${today}`)
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        setDiary(json.diary);
      })
      .catch((ex) => console.error(ex.message));
  }, []);

  const handleArrowClick = (e) => {
    const selectedDate = new Date(theDate);
    if (e.target.id === "arrow-left") {
      selectedDate.setDate(selectedDate.getDate() - 1);
      setDate(selectedDate.toDateString());
    } else {
      selectedDate.setDate(selectedDate.getDate() + 1);
      setDate(selectedDate.toDateString());
    }
    console.log(selectedDate.toDateString());
    fetch(
      `${url}/diary/60fd1eceef841b3e8820c66f/${selectedDate.toDateString()}`
    )
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        setDiary(json.diary);
      })
      .catch((ex) => console.error(ex.message));
  };

  const handleDayClick = (value, event) => {
    setCalendarOpen(false);
    setDate(value.toDateString());
    console.log(value.toDateString());

    fetch(`${url}/diary/60fd1eceef841b3e8820c66f/${value.toDateString()}`)
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        setDiary(json.diary);
      })
      .catch((ex) => console.error(ex.message));
  };

  const findSum = (arr, macro) => {
    return arr.reduce((sum, val) => {
      return sum + val[macro];
    }, 0);
  };

  const getTotals = (macro) => {
    if (!diary) return;
    return (
      findSum(diary.breakfast, macro) +
      findSum(diary.lunch, macro) +
      findSum(diary.dinner, macro) +
      findSum(diary.snack, macro)
    );
  };

  const handleTile = ({ date, view }) => {
    if (view === "month" && theDate === date.toDateString()) {
      return "active__date";
    }
  };

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
          <i
            className="far fa-calendar-alt"
            onClick={() => setCalendarOpen(!calendarOpen)}
          ></i>
        </div>
        <div className="diary__header__calendar__buttons">
          <i
            className="diary__header__calendar__button fas fa-long-arrow-alt-left"
            onClick={handleArrowClick}
            id="arrow-left"
          ></i>
          <p className="calendar__day">{theDate}</p>
          <i
            className="diary__header__calendar__button fas fa-long-arrow-alt-right"
            onClick={handleArrowClick}
            id="arrow-right"
          ></i>
        </div>
        {calendarOpen ? (
          <div className="diary__calendar">
            <Calendar onClickDay={handleDayClick} tileClassName={handleTile} />
          </div>
        ) : null}
      </div>
      <div className="diary__meals">
        <div className="diary__meal">
          <h4 className="diary__meal__title">Breakfast</h4>
          <table className="diary__meal__table">
            <thead>
              <tr className="diary__meal__table__header">
                <th>Name</th>
                <th>
                  Calories <span>kcal</span>
                </th>
                <th>
                  Carbs <span>g</span>
                </th>
                <th>
                  Protein <span>g</span>
                </th>
                <th>
                  Fat <span>g</span>
                </th>
                <th className="empty__col"></th>
              </tr>
            </thead>
            <tbody>
              {diary
                ? diary.breakfast.map((entry) => {
                    return (
                      <tr key={entry._id} className="diary__meal__table__row">
                        <td>{entry.name}</td>
                        <td>{entry.calories}</td>
                        <td>{entry.carbs}</td>
                        <td>{entry.protein}</td>
                        <td>{entry.fat}</td>
                        <td className="empty__col">
                          <i className="fas fa-minus"></i>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <Link to="/add-food">
                    <button>Add Food</button>
                  </Link>
                </td>
                <td>{diary ? findSum(diary.breakfast, "calories") : 0}</td>
                <td>{diary ? findSum(diary.breakfast, "carbs") : 0}</td>
                <td>{diary ? findSum(diary.breakfast, "protein") : 0}</td>
                <td>{diary ? findSum(diary.breakfast, "fat") : 0}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="diary__meal">
          <h4 className="diary__meal__title">Lunch</h4>
          <table className="diary__meal__table">
            <thead>
              <tr className="diary__meal__table__header">
                <th>Name</th>
                <th>
                  Calories <span>kcal</span>
                </th>
                <th>
                  Carbs <span>g</span>
                </th>
                <th>
                  Protein <span>g</span>
                </th>
                <th>
                  Fat <span>g</span>
                </th>
                <th className="empty__col"></th>
              </tr>
            </thead>
            <tbody>
              {diary
                ? diary.lunch.map((entry) => {
                    return (
                      <tr key={entry._id} className="diary__meal__table__row">
                        <td>{entry.name}</td>
                        <td>{entry.calories}</td>
                        <td>{entry.carbs}</td>
                        <td>{entry.protein}</td>
                        <td>{entry.fat}</td>
                        <td className="empty__col">
                          <i className="fas fa-minus"></i>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <Link to="/add-food">
                    <button>Add Food</button>
                  </Link>
                </td>
                <td>{diary ? findSum(diary.lunch, "calories") : 0}</td>
                <td>{diary ? findSum(diary.lunch, "carbs") : 0}</td>
                <td>{diary ? findSum(diary.lunch, "protein") : 0}</td>
                <td>{diary ? findSum(diary.lunch, "fat") : 0}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="diary__meal">
          <h4 className="diary__meal__title">Dinner</h4>
          <table className="diary__meal__table">
            <thead>
              <tr className="diary__meal__table__header">
                <th>Name</th>
                <th>
                  Calories <span>kcal</span>
                </th>
                <th>
                  Carbs <span>g</span>
                </th>
                <th>
                  Protein <span>g</span>
                </th>
                <th>
                  Fat <span>g</span>
                </th>
                <th className="empty__col"></th>
              </tr>
            </thead>
            <tbody>
              {diary
                ? diary.dinner.map((entry) => {
                    return (
                      <tr key={entry._id} className="diary__meal__table__row">
                        <td>{entry.name}</td>
                        <td>{entry.calories}</td>
                        <td>{entry.carbs}</td>
                        <td>{entry.protein}</td>
                        <td>{entry.fat}</td>
                        <td className="empty__col">
                          <i className="fas fa-minus"></i>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <Link to="/add-food">
                    <button>Add Food</button>
                  </Link>
                </td>
                <td>{diary ? findSum(diary.dinner, "calories") : 0}</td>
                <td>{diary ? findSum(diary.dinner, "carbs") : 0}</td>
                <td>{diary ? findSum(diary.dinner, "protein") : 0}</td>
                <td>{diary ? findSum(diary.dinner, "fat") : 0}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="diary__meal">
          <h4 className="diary__meal__title">Snack</h4>
          <table className="diary__meal__table">
            <thead>
              <tr className="diary__meal__table__header">
                <th>Name</th>
                <th>
                  Calories <span>kcal</span>
                </th>
                <th>
                  Carbs <span>g</span>
                </th>
                <th>
                  Protein <span>g</span>
                </th>
                <th>
                  Fat <span>g</span>
                </th>
                <th className="empty__col"></th>
              </tr>
            </thead>
            <tbody>
              {diary
                ? diary.snack.map((entry) => {
                    return (
                      <tr key={entry._id} className="diary__meal__table__row">
                        <td>{entry.name}</td>
                        <td>{entry.calories}</td>
                        <td>{entry.carbs}</td>
                        <td>{entry.protein}</td>
                        <td>{entry.fat}</td>
                        <td className="empty__col">
                          <i className="fas fa-minus"></i>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <Link to="/add-food">
                    <button>Add Food</button>
                  </Link>
                </td>
                <td>{diary ? findSum(diary.snack, "calories") : 0}</td>
                <td>{diary ? findSum(diary.snack, "carbs") : 0}</td>
                <td>{diary ? findSum(diary.snack, "protein") : 0}</td>
                <td>{diary ? findSum(diary.snack, "fat") : 0}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="diary__summary">
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Totals</strong>
              </td>
              <td>{diary ? getTotals("calories") : null}</td>
              <td>{diary ? getTotals("carbs") : null}</td>
              <td>{diary ? getTotals("protein") : null}</td>
              <td>{diary ? getTotals("fat") : null}</td>
            </tr>
            <tr>
              <td>
                <strong>Your Daily Goal</strong>
              </td>
              <td>{goals ? goals.calories : null}</td>
              <td>
                {goals
                  ? Math.floor((goals.calories * (goals.carbs / 100)) / 4)
                  : null}
              </td>
              <td>
                {goals
                  ? Math.floor((goals.calories * (goals.protein / 100)) / 4)
                  : null}
              </td>
              <td>
                {goals
                  ? Math.floor((goals.calories * (goals.fat / 100)) / 9)
                  : null}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Remaining</strong>
              </td>
              <td>
                {diary && goals
                  ? Math.floor(goals.calories - getTotals("calories"))
                  : null}
              </td>
              <td>
                {diary && goals
                  ? Math.floor(
                      (goals.calories * (goals.carbs / 100)) / 4 -
                        getTotals("carbs")
                    )
                  : null}
              </td>
              <td>
                {diary && goals
                  ? Math.floor(
                      (goals.calories * (goals.protein / 100)) / 4 -
                        getTotals("protein")
                    )
                  : null}
              </td>
              <td>
                {diary && goals
                  ? Math.floor(
                      (goals.calories * (goals.fat / 100)) / 9 -
                        getTotals("fat")
                    )
                  : null}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="empty__col"></td>
              <td className="diary__summary__footer">
                Calories <span>kcal</span>
              </td>
              <td className="diary__summary__footer">
                Carbs <span>g</span>
              </td>
              <td className="diary__summary__footer">
                Protein <span>g</span>
              </td>
              <td className="diary__summary__footer">
                Fat <span>g</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Diary;
