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
                <div className="dashboard__summary__content__top__info__main__buttons">
                  <button className="dashboard__btn dashboard__summary__content__top__info__main__exercise">
                    Add Exercise
                  </button>
                  <button className="dashboard__btn dashboard__summary__content__top__info__main__food">
                    Add Food
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__summary__content__bottom__calculation">
            <p className="dashboard__summary__content__bottom__calculation__total">
              1800 <span>GOAL</span>
            </p>
            <p className="dashboard__summary__content__bottom__calculation__carbs">
              500 <span>Carbs</span>
            </p>
            <p className="dashboard__summary__content__bottom__calculation__operator">
              +
            </p>
            <p className="dashboard__summary__content__bottom__calculation__protein">
              400 <span>Protein</span>
            </p>
            <p className="dashboard__summary__content__bottom__calculation__operator">
              +
            </p>
            <p className="dashboard__summary__content__bottom__calculation__fat">
              100 <span>Fat</span>
            </p>
            <p className="dashboard__summary__content__bottom__calculation__operator">
              =
            </p>
            <p className="dashboard__summary__content__bottom__calculation__total">
              1000 <span>Total</span>
            </p>
          </div>
          <div className="dashboard__summary__content__bar">
            <div className="dashboard__summary__content__bar__carbs dashboard__bar"></div>
            <div className="dashboard__summary__content__bar__protein dashboard__bar"></div>
            <div className="dashboard__summary__content__bar__fat dashboard__bar"></div>
          </div>
          <p className="dashboard__summary__content__calorie__value">
            1000 calories
          </p>
          <div className="dashboard__summary__content__macros">
            <div className="dashboard__summary__content__macros__carbs">
              <p className="dashboard__summary__content__macros__carbs__square dashboard__square"></p>
              <p className="dashboard__summary__content__macros__carbs__text">
                Carbs
              </p>
            </div>
            <div className="dashboard__summary__content__macros__protein">
              <p className="dashboard__summary__content__macros__protein__square dashboard__square"></p>
              <p className="dashboard__summary__content__macros__protein__text">
                Protein
              </p>
            </div>
            <div className="dashboard__summary__content__macros__fat">
              <p className="dashboard__summary__content__macros__fat__square dashboard__square"></p>
              <p className="dashboard__summary__content__macros__fat__text">
                Fat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard__feed">
        <div className="dashboard__feed__create">
          <h4 className="dashboard__feed__create__title">News Feed</h4>
          <div className="dashboard__feed__create__content">
            <textarea
              className="dashboard__feed__create__content__text"
              name=""
              id=""
              placeholder="What's on your mind?"
            ></textarea>
            <button className="dashboard__feed__create__content__btn">
              Share
            </button>
          </div>
        </div>

        <div className="dashboard__feed__post">
          <div className="dashboard__feed__post__header">
            <img
              src="https://dakd0cjsv8wfa.cloudfront.net/images/photos/user/0450/856b/3705/583e/8e43/848f/26b1/089bce314a00aed223a49440dafe4788268d_thumb.jpg"
              alt="profile pic"
              className="dashboard__feed__post__picture"
            />
            <div className="dashboard__feed__post__info">
              <div className="dashboard__feed__post__info__top">
                <p className="dashboard__feed__post__user">jmoberly15</p>
                <button className="dashboard__feed__post__delete">X</button>
              </div>
              <p className="dashboard__feed__post__date">1 day ago</p>
            </div>
          </div>
          <p className="dashboard__feed__post__text">
            Follow my journey as I try and get in shape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
