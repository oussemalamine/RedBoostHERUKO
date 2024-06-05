require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(fileUpload());

// MongoDB Session store
const store = new MongoDBSession({
  uri: process.env.DATABASE_URI,
  collection: 'sessions',
});

store.on('connected', () => {
  console.log('Session store connected!');
});

store.on('error', (error) => {
  console.error('Session store error:', error);
});

app.use(session({
  key: 'sessionId',
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

// File upload route
app.post('/upload', (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).send({ message: "No file uploaded" });
  }
  const file = req.files.image.tempFilePath;

  cloudinary.uploader.upload(file, (error, result) => {
    if (error) {
      console.error('Upload error:', error);
      return res.status(500).send(error);
    }
    res.status(200).send(result);
  });
});

// Import routes
const signupRoute = require('./routes/api/register');
const loginRoute = require('./routes/api/login');
const checkAuthRoute = require('./routes/api/checkAuth');
const logoutRoute = require('./routes/api/logout');
const usersRoute = require('./routes/api/users');
const UpdateUser = require('./routes/api/UpdateUser');
const checkPass = require('./routes/api/checkPass');
const AddEvent = require('./routes/api/AddEvent');
const getEvents = require('./routes/api/getEvents');
const deleteEvent = require('./routes/api/DeleteEvent');
const UpdateEvent = require('./routes/api/UpdateEvent');
const forgetPassword = require('./routes/api/ForgetPassword');
const handleProgram = require('./routes/api/handleProgram');
const handleActivity = require('./routes/api/handleActivity');
const hundleEntrepreneur = require('./routes/api/hundleEntrepreneur');
const handleStartups = require('./routes/api/handleStartups');
const handleTask = require('./routes/api/handleTask');
const sessionsRoute = require('./routes/api/Sessions');

// Use routes
app.use('/register', signupRoute);
app.use('/login', loginRoute);
app.use('/events', AddEvent);
app.use('/forget-password', forgetPassword);
app.use('/login', checkAuthRoute);
app.use('/logout', logoutRoute);
app.use('/loadCurrentUser', usersRoute);
app.use('/loadUsers', usersRoute);
app.use('/checkPass', checkPass);
app.use('/events', getEvents);
app.use('/users/:userId', UpdateUser);
app.use('/deleteUser/:userId', usersRoute);
app.use('/updateUser/:userId', usersRoute);
app.use('/events/:idEvent', UpdateEvent);
app.use('/events/:idEvent', deleteEvent);
app.use('/addProgram', handleProgram);
app.use('/deleteProgram/:programId', handleProgram);
app.use('/updateProgram/:programId', handleProgram);
app.use('/loadPrograms', handleProgram);
app.use('/addActivity', handleActivity);
app.use('/deleteActivity/:activityId', handleActivity);
app.use('/updateActivity/:activityId', handleActivity);
app.use('/loadActivity/:activityId', handleActivity);
app.use('/loadActivitiesByProgramId/:programId', handleActivity);
app.use('/createntrepreneurs', hundleEntrepreneur);
app.use('/createstartup', handleStartups);
app.use('/loadAllentrepreneurs', hundleEntrepreneur);
app.use('/addTask', handleTask);
app.use('/loadTask/:taskId', handleTask);
app.use('/deleteTask/:taskId', handleTask);
app.use('/updateTask/:taskId', handleTask);
app.use('/loadTasks', handleTask);
app.use('/loadTasksByActivityId/:activityId', handleTask);
app.use('/sessions', sessionsRoute);

// Catch-all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Database and Server Connection
mongoose.connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database Connected!');
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
