const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const mongoSanitize = require("mongo-sanitize");
const helmet = require("helmet");
// const dotenv = require("dotenv").config();
// const passport = require("passport");
// const session = require("express-session");
const app = express();

// import routes
const postRoutes = require("./routes/post.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
// const passportConfig = require("./config/passport");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

// app.use(session({ resave: true, secret: "anything", saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

/* MIDDLEWARE */
app.use(
  cors({
    origin: "https://mernappdzik.herokuapp.com/"
  })
);

app.use((req, res, next) => {
  mongoSanitize(req.body);
  next();
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, "/client/")));

/* API ENDPOINTS */
app.use("/api", postRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/* API ERROR PAGES */
app.use("/api", (req, res) => {
  res.status(404).send({ post: "Not found..." });
});

/* MONGOOSE */
mongoose.connect(
  `mongodb+srv://dzikdrums:mongo4880po9@dziknote-5co5j.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to the database");
});
db.on("error", err => console.log("Error: " + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
