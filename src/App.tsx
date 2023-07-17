import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/Header/Header";

import Filters from "./components/Filters/Filters";
import CardList from "./feature/characters/CardsList";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row ">
          <Filters />
          <div className=" col-xl-8 col-md-12">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
