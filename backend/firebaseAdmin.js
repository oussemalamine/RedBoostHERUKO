// /backend/firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./redboost-31694-firebase-adminsdk-qeqss-69b9b739ec.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'redboost-31694.appspot.com',
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
