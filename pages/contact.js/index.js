import ContactForm from "@/components/contact/ContactForm";
import Notification from "@/components/UI/Notification";
import Head from "next/head";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [requestStatus, setRequestStatus] = useState();
  const [error, setError] = useState();
  const [isNotificationShowing, setIsNotificationShowing] = useState();

  const addFeedbackHandler = async (feedbackData) => {
    try {
      //send the data via API to mongodb database
      setRequestStatus("pending");
      setIsNotificationShowing(true);
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(feedbackData),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok || response.status === 500 || response.status === 422) {
        throw new Error("failed at sending out data");
      }
      setRequestStatus("success");
    } catch (error) {
      setRequestStatus("error");
      setError(error.message);
    }
  };

  let notification;
  if (requestStatus === "pending")
    notification = {
      status: "pending",
      title: "sending contact info",
      message: "your data is on its way",
    };
  if (requestStatus === "error")
    notification = {
      status: "error",
      title: "failed at sending contact info",
      message: error,
    };
  if (requestStatus === "success")
    notification = {
      status: "success",
      title: "successful at sending out data",
      message: "your data was successfully received",
    };

  const hideNotificationHandler = () => {
    if (notification.status === "error") return;
    setIsNotificationShowing(false);
  };

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setError(null);
        setIsNotificationShowing(false);
        // setRequestStatus(null); this approach works too. when the requestStatus is set to undefined, notification variable would not be initialized, so the Notification component will not be shown
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="send me your feedback" />
      </Head>
      <ContactForm onAddFeedback={addFeedbackHandler} />
      {isNotificationShowing && notification && (
        <Notification
          notification={notification}
          onHideNotification={hideNotificationHandler}
        />
      )}
    </>
  );
};

export default ContactPage;
