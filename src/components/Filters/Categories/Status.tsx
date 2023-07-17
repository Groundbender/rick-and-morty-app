import { useAppDispatch } from "redux-hooks";
import { setStatus } from "feature/filter/filter-slice";
import { StatusType } from "types";

import FilterBTN from "../FilterBtn/FilterBtn";

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
