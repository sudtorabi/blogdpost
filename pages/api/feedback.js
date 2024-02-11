import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  console.log("handler function just started");
  if (req.method === "POST") {
    const feedbackData = req.body;
    if (
      feedbackData.email.trim() === "" ||
      !feedbackData.email.includes("@") ||
      feedbackData.name.trim() === "" ||
      feedbackData.feedback.trim() === ""
    )
      return res.status(422).json({ message: "invalid fields" });
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sudtorabi:cc3uceab@cluster0.vffmeot.mongodb.net/?retryWrites=true&w=majority"
      );
      const blogPostDB = client.db("blogPost");
      const feedbacklCollection = blogPostDB.collection("feedback");
      const result = await feedbacklCollection.insertOne(feedbackData);
      client.close();
      return res.status(201).json({
        message: "successfully added your feedback",
        id: result.insertedId,
        ...feedbackData,
      });
    } catch (error) {
      client.close();
      return res
        .status(500)
        .json({ message: error.message || "failed to save your feedback" });
    }
  }
};

export default handler;
