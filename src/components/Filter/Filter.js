import React from "react";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <div className={s.filterWrapper}>
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
