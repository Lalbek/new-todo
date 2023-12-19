import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoPage } from "./pages/TodoPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container"></div>
      <Routes>
        <Route element={<TodoPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
