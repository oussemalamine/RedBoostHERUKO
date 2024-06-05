require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // Import body-parser
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

const db = process.env.DATABASE_URI;
const secret = process.env.SECRET;
const PORT = process.env.PORT || 5000; //this is can be changed careful with it !!!!!!!!!!
const app = express();

cloudinary.config({
  cloud_name: 'dm9xohwds',
  api_key: '649819331138157',
  api_secret: 'ldl_j0oGOzHQjX-cvT97jc-bL5Y'
});

// Increase payload size limit for body-parser
// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" })); // Set a higher limit for JSON requests
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// CORS configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log("Request body:", req.body);
  if (req.files) {
    console.log("Files:", req.files);
  }
  next();
});

// Session store configuration
const store = new MongoDBSession({
  uri: db,
  collection: "sessions",
});

store.on("connected", () => {
  console.log("Session store connected!");
});

store.on("error", (error) => {
  console.error("Session store error:", error);
});

app.use(
  session({
    key: "sessionId",
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// File upload route
app.post("/upload", (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  const file = req.files.file;
  const tempFilePath = file.tempFilePath || file.path;

  cloudinary.uploader.upload(
    tempFilePath,
    {
      resource_type: "auto",
    },
    (error, result) => {
      if (error) {
        console.error("Upload error:", error);
        return res.status(500).send({ message: "Upload failed", error });
      }
      res.status(200).send(result);
    }
  );
});

// Importing routes
const signupRoute = require("./routes/api/register");
const loginRoute = require("./routes/api/login");
const checkAuthRoute = require("./routes/api/checkAuth");
const logoutRoute = require("./routes/api/logout");
const usersRoute = require("./routes/api/users");
const UpdateUser = require("./routes/api/UpdateUser");
const checkPass = require("./routes/api/checkPass");
const AddEvent = require("./routes/api/AddEvent");
const getEvents = require("./routes/api/getEvents");
const deleteEvent = require("./routes/api/DeleteEvent");
const UpdateEvent = require("./routes/api/UpdateEvent");
const forgetPassword = require("./routes/api/ForgetPassword");
const handleProgram = require("./routes/api/handleProgram");
const handleActivity = require("./routes/api/handleActivity");
const hundleEntrepreneur = require("./routes/api/hundleEntrepreneur");
const handleStartups = require("./routes/api/handleStartups");
const handleTask = require("./routes/api/handleTask");
const sessionsRoute = require("./routes/api/Sessions");
require("./passport/index");

// Defining routes
app.post("/register", signupRoute);
app.post("/login", loginRoute);
app.post("/events", AddEvent);
app.post("/forget-password", forgetPassword);
app.get("/login", checkAuthRoute);
app.get("/logout", logoutRoute);
app.post("/loadCurrentUser", usersRoute);
app.post("/loadUsers", usersRoute);
app.get("/checkPass", checkPass);
app.get("/events", getEvents);
app.put("/users/:userId", UpdateUser);
app.delete("/deleteUser/:userId", usersRoute);
app.put("/updateUser/:userId", usersRoute);
app.put("/events/:idEvent", UpdateEvent);
app.delete("/events/:idEvent", deleteEvent);
app.post("/addProgram", handleProgram);
app.delete("/deleteProgram/:programId", handleProgram);
app.put("/updateProgram/:programId", handleProgram);
app.post("/loadPrograms", handleProgram);
app.post("/addActivity", handleActivity);
app.delete("/deleteActivity/:activityId", handleActivity);
app.put("/updateActivity/:activityId", handleActivity);
app.post("/loadActivity/:activityId", handleActivity);
app.post("/loadActivitiesByProgramId/:programId", handleActivity);
app.post("/createntrepreneurs", hundleEntrepreneur);
app.post("/createstartup", handleStartups);
app.get("/loadAllentrepreneurs", hundleEntrepreneur);
app.post("/addTask", handleTask);
app.post("/loadTask/:taskId", handleTask);
app.delete("/deleteTask/:taskId", handleTask);
app.put("/updateTask/:taskId", handleTask);
app.post("/loadTasks", handleTask);
app.post("/loadTasksByActivityId/:activityId", handleTask);
app.get("/sessions", sessionsRoute);

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Database + Server Connection Validation
mongoose
  .connect(db)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database Connected!");
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });