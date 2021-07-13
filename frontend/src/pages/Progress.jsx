import "./Progress.css";
import { Bar } from "react-chartjs-2";

const Progress = () => {
  return (
    <section className="progress">
      <h3 className="progress__title">Progress Charts</h3>
      <div className="progress__select">
        <h4 className="progress__select__prompt">Choose a category:</h4>
        <select name="category">
          <option value="calories" selected>
            Calories
          </option>
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
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
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
