const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert('./serviceKey.json'),
    databaseURL: 'https://blog-app-b8536.firebaseio.com/',
});

const uid = 'sfJyb90AuqVg9XZVyXMLfvy6vmg1';

return admin
    .auth()
    .setCustomUserClaims(uid, { admin: true })
    .then(() => {
        // The new custom claims will propagate to the user's ID token the
        // next time a new one is issued.
        console.log(`Admin claim added to ${uid}`);
    });
