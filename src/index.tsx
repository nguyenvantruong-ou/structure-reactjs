import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppProvider from "./provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);


