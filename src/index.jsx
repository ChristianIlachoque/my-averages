import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CourseContextProvider, { CourseContext } from "./context/CourseContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CourseContextProvider>
      <App />
    </CourseContextProvider>
  </React.StrictMode>
);
