const element = (
  <div className="bg-container">
    <h1 className="head-text">Congratulations</h1>
    <div className="card-container">
      <img
        className="person-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name-text">Kiran V</h1>
      <p className="college-text">Vishnu Institute Of Technology</p>
      <img
        className="watch-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
