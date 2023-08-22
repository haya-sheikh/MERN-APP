
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCsYiU9hJNHVRT700qHG-tVWJxNqObYB4M",
  authDomain: "k-ramen-2e8d3.firebaseapp.com",
  projectId: "k-ramen-2e8d3",
  storageBucket: "k-ramen-2e8d3.appspot.com",
  messagingSenderId: "201008482450",
  appId: "1:201008482450:web:7e1029ca898acadfc17e4b"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)