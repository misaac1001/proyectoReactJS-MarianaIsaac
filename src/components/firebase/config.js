import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDh2HZL3Lky87EYOZyxKNBidcn_bP6QPBc",
  authDomain: "proyecto-react-coderhous-86088.firebaseapp.com",
  projectId: "proyecto-react-coderhous-86088",
  storageBucket: "proyecto-react-coderhous-86088.appspot.com",
  messagingSenderId: "819291914786",
  appId: "1:819291914786:web:bf9d1f8c1bbc2c4c8b407b",
};

const app = initializeApp(firebaseConfig);

export const firebaseConection = () => app;
