import ReactDOM from "react-dom";
import styles from "./Notification.module.css";

const Notification = (props) => {
  const { notification } = props;

  const hideNotificationHandler = () => {
    props.onHideNotification();
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles.notification} ${styles[notification.status]}`}
      onClick={hideNotificationHandler}
    >
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
