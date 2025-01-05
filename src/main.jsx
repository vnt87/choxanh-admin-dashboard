import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SplashCursorProvider } from "./context/SplashCursorContext";
import SplashCursor from "./components/SplashCursor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SplashCursorProvider>
    <App />
    <SplashCursor />
  </SplashCursorProvider>
);
