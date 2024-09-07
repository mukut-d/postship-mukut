import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/assets/fonts/Inter400.ttf";
import "../src/assets/fonts/Inter500.ttf";
import "../src/assets/fonts/Inter600.ttf";
import "../src/assets/fonts/Inter700.ttf";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
