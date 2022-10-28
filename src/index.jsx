import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

import "../public/style.css";

const root = document.querySelector("#root");
const app = createRoot(root);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
