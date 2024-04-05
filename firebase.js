import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjppxS8fmJjYuQeBy14Of6-9l4I6Ytneg",
  authDomain: "chat-34bed.firebaseapp.com",
  projectId: "chat-34bed",
  storageBucket: "chat-34bed.appspot.com",
  messagingSenderId: "765699500807",
  appId: "1:765699500807:web:e3f242a1b1a89b97e273a2"
};


 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()