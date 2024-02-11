import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  const addFeedbackHandler = async (feedbackData) => {
    //send the data via API to mongodb database
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(feedbackData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) return console.log("errorrrr");
    const data = await response.json();
    console.log(data);
  };
  return <ContactForm onAddFeedback={addFeedbackHandler} />;
};

export default ContactPage;
