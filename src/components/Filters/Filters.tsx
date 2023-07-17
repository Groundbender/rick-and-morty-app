import { useDispatch } from "react-redux";
import { resetToDefaults } from "feature/filter/clear-filters-action";

import Status from "./Categories/Status";
import Gender from "./Categories/Gender";
import Species from "./Categories/Species";

const Filters = () => {
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(resetToDefaults());
    window.location.reload();
  };

  return (
    <div className="col-sm-12 col-xl-3">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={clearFilters}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender />
        <Status />
        <Species />
      </div>
    </div>
  );
};

export default Filters;
