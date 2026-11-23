// Firebase settings for the Daily 10 site.
// These values are not secret: Firebase web config is meant to be public.
// Access is controlled by the rules in firestore.rules.
window.DAILY10_CONFIG = {
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    appId: "PASTE_APP_ID"
  },
  // Google accounts that see everyone's progress on the Progress page
  // and can add questions. Put your own Gmail here.
  ownerEmails: ["PASTE_YOUR_EMAIL@gmail.com"]
};
