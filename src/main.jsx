import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { firebaseConection } from "./components/firebase/config.js";

firebaseConection()
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
