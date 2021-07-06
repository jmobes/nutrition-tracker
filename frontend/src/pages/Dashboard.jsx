import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <section className="dashboard">
      <div className="dashboard__summary">
        <h4 className="dashboard__summary__title">Your Daily Summary</h4>
        <div className="dashboard__summary__content"></div>
      </div>
    </section>
  );
};

export default Dashboard;
