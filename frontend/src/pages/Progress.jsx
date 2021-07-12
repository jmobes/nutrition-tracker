import "./Progress.css";

const Progress = () => {
  return (
    <section className="progress">
      <h3 className="progress__title">Progress and Charts</h3>
      <div className="progress__select">
        <h4 className="progress__select__prompt">Choose a category:</h4>
        <select name="category">
          <option value="calories" selected>
            Calories
          </option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </section>
  );
};

export default Progress;
