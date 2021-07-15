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
              <tr className="diary__meal__table__row">
                <td>Skippy Peanut Butter</td>
                <td>190</td>
                <td>7</td>
                <td>7</td>
                <td>16</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Celery</td>
                <td>30</td>
                <td>6</td>
                <td>1</td>
                <td>0</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Mashed Potatoes</td>
                <td>300</td>
                <td>50</td>
                <td>10</td>
                <td>8</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <button>Add Food</button>
                </td>
                <td>900</td>
                <td>93</td>
                <td>32</td>
                <td>50</td>
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
              <tr className="diary__meal__table__row">
                <td>Skippy Peanut Butter</td>
                <td>190</td>
                <td>7</td>
                <td>7</td>
                <td>16</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Celery</td>
                <td>30</td>
                <td>6</td>
                <td>1</td>
                <td>0</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Mashed Potatoes</td>
                <td>300</td>
                <td>50</td>
                <td>10</td>
                <td>8</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <button>Add Food</button>
                </td>
                <td>900</td>
                <td>93</td>
                <td>32</td>
                <td>50</td>
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
              <tr className="diary__meal__table__row">
                <td>Skippy Peanut Butter</td>
                <td>190</td>
                <td>7</td>
                <td>7</td>
                <td>16</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Celery</td>
                <td>30</td>
                <td>6</td>
                <td>1</td>
                <td>0</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Mashed Potatoes</td>
                <td>300</td>
                <td>50</td>
                <td>10</td>
                <td>8</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <button>Add Food</button>
                </td>
                <td>900</td>
                <td>93</td>
                <td>32</td>
                <td>50</td>
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
              <tr className="diary__meal__table__row">
                <td>Skippy Peanut Butter</td>
                <td>190</td>
                <td>7</td>
                <td>7</td>
                <td>16</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Celery</td>
                <td>30</td>
                <td>6</td>
                <td>1</td>
                <td>0</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
              <tr className="diary__meal__table__row">
                <td>Mashed Potatoes</td>
                <td>300</td>
                <td>50</td>
                <td>10</td>
                <td>8</td>
                <td className="empty__col">
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="diary__meal__table__footer">
                <td>
                  <button>Add Food</button>
                </td>
                <td>900</td>
                <td>93</td>
                <td>32</td>
                <td>50</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="diary__summary">
        <table>
          <tr>
            <td>
              <strong>Totals</strong>
            </td>
            <td>905</td>
            <td>93</td>
            <td>63</td>
            <td>32</td>
          </tr>
          <tr>
            <td>
              <strong>Your Daily Goal</strong>
            </td>
            <td>1800</td>
            <td>225</td>
            <td>90</td>
            <td>60</td>
          </tr>
          <tr>
            <td>
              <strong>Remaining</strong>
            </td>
            <td>895</td>
            <td>132</td>
            <td>27</td>
            <td>28</td>
          </tr>
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
