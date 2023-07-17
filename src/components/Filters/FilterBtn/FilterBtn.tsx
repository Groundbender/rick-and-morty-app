import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "store";

import { GenderType, SpeciesType, StatusType } from "types";

import "./FilterBtn.scss";
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
