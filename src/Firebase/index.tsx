// import React from "react";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// export const firebaseConfig = {
//   apiKey: "AIzaSyAZGawRqfgiuEOr02uAlA2CNSGNf8xLNpg",
//   authDomain: "react-f4d2f.firebaseapp.com",
//   projectId: "react-f4d2f",
//   storageBucket: "react-f4d2f.appspot.com",
//   messagingSenderId: "122413799539",
//   appId: "1:122413799539:web:ba66a02009bf4fb84db206",
//   measurementId: "G-82VEH60LGE",
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

/////////////////////////////////////////////////////

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvLoYbM_r0bs0gM5Rqssearp_BTcWDhoY",
  authDomain: "du-lieu-fa778.firebaseapp.com",
  projectId: "du-lieu-fa778",
  storageBucket: "du-lieu-fa778.appspot.com",
  messagingSenderId: "1006978359441",
  appId: "1:1006978359441:web:0d73102b579f33ae1a1f30",
  measurementId: "G-H963W37MY4"
};

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);