import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <section className="dashboard">
      <div className="dashboard__summary">
        <h4 className="dashboard__summary__title">Your Daily Summary</h4>
        <div className="dashboard__summary__content">
          <div className="dashboard__summary__content__top">
            <img
              src="https://dakd0cjsv8wfa.cloudfront.net/images/photos/user/0450/856b/3705/583e/8e43/848f/26b1/089bce314a00aed223a49440dafe4788268d_thumb.jpg"
              alt="profile pic"
              className="dashboard__summary__content__top__picture"
            />
            <div className="dashboard__summary__content__top__info">
              <p className="dashboard__summary__content__top__info__remaining">
                Calories Remaining <span>Change</span>
              </p>
              <div className="dashboard__summary__content__top__info__main">
                <p className="dashboard__summary__content__top__info__main__calories">
                  1800
                </p>
                <button className="dashboard__summary__content__top__info__main__exercise">
                  Add Exercise
                </button>
                <button className="dashboard__summary__content__top__info__main__food">
                  Add Food
                </button>
              </div>
            </div>
            <div className="dashboard__summary__content__top__calculation">
              <p className="dashboard__summary__content__top__calculation__total">
                1800 <span>GOAL</span>
              </p>
              <p className="dashboard__summary__content__top__calculation__food">
                0 <span>FOOD</span>
              </p>
              <p className="dashboard__summary__content__top__calculation__exercise">
                0 <span>EXERCISE</span>
              </p>
              <p className="dashboard__summary__content__top__calculation__net">
                0 <span>NET</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
