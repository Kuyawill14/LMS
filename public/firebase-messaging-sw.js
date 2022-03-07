// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyDWhE_gfbOrfbU88UwTZNDKYg0_ND0QQsQ",
    authDomain: "isue-orange-pushnotification.firebaseapp.com",
    projectId: "isue-orange-pushnotification",
    storageBucket: "isue-orange-pushnotification.appspot.com",
    messagingSenderId: "914599704994",
    appId: "1:914599704994:web:5e7e272dd3fb83013f5afb"
});

const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
   /*  const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    ); */
});

