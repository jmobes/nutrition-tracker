import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__col--1">
        <h2 className="home__title">Results start with the food you eat.</h2>
        <p className="home__message">
          Take your gains to the next level. Start tracking your calories,
          macros, and vitamins to enhance your fitness level.
        </p>
        <div className="home__button__ctn">
          <button className="home__button">Start Counting</button>
        </div>
      </div>
      <div className="home__col--2">
        <img className="home__image" src="images/home.jpeg" alt="pic" />
      </div>
      <p className="home__caption">
        Searching foods is easy with the Food Data Central Database.
      </p>
    </section>
  );
};

export default Home;
