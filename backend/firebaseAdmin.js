// /backend/firebaseAdmin.js
const admin = require('firebase-admin');
require('dotenv').config();  // Ensure you have dotenv installed and required

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'redboost-31694.appspot.com',
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
