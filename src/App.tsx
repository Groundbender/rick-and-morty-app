import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/Header/Header";

import Filters from "./components/Filters/Filters";
import CardList from "./feature/characters/CardsList";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import SingleCharacter from "pages/SingleCharacter/SingleCharacter";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SingleCharacter />} />
      </Routes>
    </>
  );
}

export default App;
