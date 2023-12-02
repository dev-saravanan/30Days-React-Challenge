const Notification = (props) => {
  let { notificationText, notificationLink } = props;
  return (
    <div className={notificationLink + " notification-container"}>
      <img
        className="notification-img"
        src={
          "https://assets.ccbp.in/frontend/react-js/" +
          notificationLink +
          "-icon-img.png"
        }
      />
      <p className="notification-text">{notificationText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div class="main-notifications-container">
      <Notification
        notificationText="Information Message"
        notificationLink="primary"
      />
      <Notification
        notificationText="Success Message"
        notificationLink="success"
      />
      <Notification
        notificationText="Warning Message"
        notificationLink="warning"
      />
      <Notification
        notificationText="Error Message"
        notificationLink="danger"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
