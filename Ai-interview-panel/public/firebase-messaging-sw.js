// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyA0XrP9NVgprSSWkVuoyuHltavKiuQBNKM",
  authDomain: "admin-boilerplate-testing.firebaseapp.com",
  projectId: "admin-boilerplate-testing",
  storageBucket: "admin-boilerplate-testing.firebasestorage.app",
  messagingSenderId: "901898910952",
  appId: "1:901898910952:web:d90018954cfc0aa0941d5d",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/your-icon.png", // Optional: Add a custom icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
