import express from "express";
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
import Chat from "./models/chat.js"; // Use proper model name capitalization
import UserChats from "./models/userChats.js"; // Use proper model name capitalization

const port = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

// MongoDB connection function
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};

// ImageKit configuration
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// Route to get ImageKit authentication parameters
app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

// Route to handle chat creation
app.post("/api/chats", async (req, res) => {
  const { userId, text } = req.body;

  if (!userId || !text) {
    return res.status(400).send("Missing userId or text");
  }

  try {
    // CREATE A NEW CHAT
    const newChat = new Chat({
      userId,
      history: [{ role: "user", parts: [{ text }] }],
    });
    const savedChat = await newChat.save();

    // CHECK IF USER CHATS EXIST
    const userChat = await UserChats.findOne({ userId });

    if (!userChat) {
      // IF DOESN'T EXIST, CREATE A NEW USER CHAT
      const newUserChats = new UserChats({
        userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        ],
      });

      await newUserChats.save();
      res.status(201).send(newChat._id); // Send response after saving
    } else {
      // IF EXISTS, PUSH TO THE EXISTING CHATS ARRAY
      userChat.chats.push({
        _id: savedChat._id,
        title: text.substring(0, 40),
      });
      await userChat.save();

      res.status(201).send(savedChat._id); // Send response after updating
    }
  } catch (error) {
    console.log("Error creating chat:", error);
    res.status(500).send("Error creating chat!");
  }
});

// Start server and ensure MongoDB connection is established
app.listen(port, async () => {
  await connect();
  console.log(`Server is running on port ${port}`);
});
