import React from "react";
import "./FilterBtn.scss";
import { GenderType, SpeciesType, StatusType } from "types";

import { useSelector } from "react-redux";
import { RootState } from "store";
interface FilterBTNProps {
  name: string;
  index: number;
  item: GenderType | SpeciesType | StatusType;
  setFilter: React.ChangeEventHandler<HTMLInputElement>;
}

const FilterBTN: React.FC<FilterBTNProps> = ({
  name,
  index,
  item,
  setFilter,
}) => {
  const filterParams = useSelector((state: RootState) => state.filters);

  return (
    <div>
      <div className="form-check">
        <input
          onChange={setFilter}
          className="form-check-input filter-btn"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
