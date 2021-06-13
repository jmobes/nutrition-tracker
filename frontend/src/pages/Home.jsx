import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <h2 className="home__title">Results start with the food you eat.</h2>
      <p className="home__message">
        Take your gains to the next level. Start tracking your calories, macros,
        and vitamins to enhance your fitness level.
      </p>
      <div className="home__button__ctn">
        <button className="home__button">Start Counting</button>
      </div>
      <div className="home__footer">
        <img className="home__image" src="images/home.jpeg" />
        <p className="home__caption">
          Searching foods is easy with the Food Data Central API.
        </p>
      </div>
    </section>
  );
};

export default Home;
