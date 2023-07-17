import FilterBTN from "../FilterBtn/FilterBtn";
import { GenderType } from "types";
import { useAppDispatch } from "redux-hooks";
import { setGender } from "feature/filter/filter-slice";
const genders: GenderType[] = ["female", "male", "genderless", "unknown"];

const Gender = () => {
  const dispatch = useAppDispatch();

  const setFilter = (genderFilter?: GenderType) => {
    if (genderFilter) {
      dispatch(setGender(genderFilter));
    }
  };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, i) => (
            <FilterBTN
              key={item}
              name="gender"
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

export default Gender;
