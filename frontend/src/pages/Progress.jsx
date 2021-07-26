import "./Progress.css";
import { Bar } from "react-chartjs-2";

const Progress = () => {
  return (
    <section className="progress">
      <h3 className="progress__title">Progress Charts</h3>
      <div className="progress__select">
        <h4 className="progress__select__prompt">Choose a category:</h4>
        <select name="category" defaultValue="calories">
          <option value="calories">Calories</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div className="progress__dates">
        <h4 className="progress__dates__prompt">Progress period</h4>
        <div className="progress__dates__list">
          <p className="progress__dates__list__item">Last 7 days</p>
          <p className="progress__dates__list__item">Last 30 days</p>
          <p className="progress__dates__list__item">Last 90 days</p>
        </div>
      </div>
      <div className="progress__bar">
        <Bar
          data={{
            labels: [
              "7-12-21",
              "7-13-21",
              "7-14-21",
              "7-15-21",
              "7-16-21",
              "7-17-21",
              "7-18-21",
            ],
            datasets: [
              {
                label: "Calories",
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default Progress;
