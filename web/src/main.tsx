import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import './assets/index.css';

import { Router } from 'pages';

const firebaseConfig = {
  apiKey: "AIzaSyBegM9BLuFlLDdUPPfR9L7z_J8O5Tqlj80",
  authDomain: "training-programms.firebaseapp.com",
  projectId: "training-programms",
  storageBucket: "training-programms.appspot.com",
  messagingSenderId: "633733456477",
  appId: "1:633733456477:web:e7276ce6d74931f0d4a3b4",
  measurementId: "G-LWY5MM70G0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Router />
  );
