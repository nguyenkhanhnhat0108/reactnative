const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello anh meo nè hihihi!");
});
exports.register = functions.https.onRequest((request, response) => {
    var docRef = db.collection('users');
    // const data = {
    //     username: request.body.username,
    //     password: request.body.password,
    //     fullname: request.body.fullname,
    //     email: request.body.email
    // }
    var users = docRef.add(request.body).then(result => {
        response.json({
            ok: true,
            message: "register success"
        });
    }).catch(error => {
        response.json({
            ok: false,
            error: "register false"
        });
    });
});
// https:trigger kích để chạy
//method:'POST,PUT':param=request.body
//method:'GET,PUT,DELETE': param = requst.query.body
exports.login = functions.https.onRequest((request, response) => {
    const { username, password } = request.body;
    var docs = [];
    db.collection('users')
        .where('username', '==', username)
        .where('password', '==', password)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                docs.push(doc.data());
            });
            var ok = docs.length > 0;
            response.json({
                ok: ok,
                user: docs,
                message: "Login success!"
            });
        })
        .catch((err) => {
            response.json({
                ok: false,
                error: err,
                message: "Login fail"
            });
        });
});

//Firestore trigger
exports.myFunctionName = functions.firestore.document('users/marie').onWrite((change, context) => {
    // ... Your code here
});