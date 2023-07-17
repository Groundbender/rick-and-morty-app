import React from "react";
import FilterBTN from "../FilterBtn/FilterBtn";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux-hooks";
import { setGender, setSpecies, setStatus } from "feature/filter/filter-slice";
import { GenderType, SpeciesType, StatusType } from "types";
const status: StatusType[] = ["Alive", "Dead", "Unknown"];

const Status = () => {
  const dispatch = useAppDispatch();

  const setFilter = (statusFilter?: StatusType) => {
    if (statusFilter) {
      dispatch(setStatus(statusFilter));
    }
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, i) => (
            <FilterBTN
              key={item}
              name="status"
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

export default Status;
