import { useAppDispatch } from "redux-hooks";
import { setSpecies } from "feature/filter/filter-slice";

import { SpeciesType } from "types";

import FilterBTN from "../FilterBtn/FilterBtn";

const species: SpeciesType[] = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];

const Species = () => {
  const dispatch = useAppDispatch();

  const setFilter = (speciesFilter?: SpeciesType) => {
    if (speciesFilter) {
      dispatch(setSpecies(speciesFilter));
    }
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Speices
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, i) => (
            <FilterBTN
              key={item}
              name="species"
              index={i}
              item={item}
              setFilter={() => setFilter(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
