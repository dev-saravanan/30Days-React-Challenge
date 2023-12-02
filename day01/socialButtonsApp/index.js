const Button = (props) => {
  let { btnName } = props;
  return <button className={btnName}>{btnName}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading-text">Social Buttons</h1>
    <div className="btn-container">
      <Button btnName="Like" />
      <Button btnName="Component" />
      <Button btnName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
