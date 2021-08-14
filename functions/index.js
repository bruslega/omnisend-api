const admin = require('firebase-admin');
const serviceAccount = require('./libs/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const functions = require('firebase-functions');
const contactsData = require('./libs/contacts');

exports.contacts = functions
  .region('us-central1')
  .runWith({
    timeoutSeconds: 540,
    memory: '2GB',
  })
  .https.onRequest(contactsData);
