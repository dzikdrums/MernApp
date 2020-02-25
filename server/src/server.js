const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('mongo-sanitize');

const postRoutes = require('./routes/post.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use((req, res, next) => {
  mongoSanitize(req.body);
  next();
});

/* API ENDPOINTS */
app.use('/api', postRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
// app.use(express.static(path.join(__dirname, '../build')));
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

/* MONGOOSE */
mongoose.connect(process.env.NODE_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
