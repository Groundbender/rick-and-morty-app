import Filters from "components/Filters/Filters";
import CardList from "feature/characters/CardsList";
import React from "react";
const Homepage = () => {
  return (
    <div className="container">
      <div className="row ">
        <Filters />
        <div className=" col-xl-8 col-md-12">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
