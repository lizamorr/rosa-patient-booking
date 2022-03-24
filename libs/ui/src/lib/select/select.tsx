import React from 'react';
import { ISelectOptions } from './select-interfaces';
import './select.scss';

interface SelectProps {
  selectLabel: string;
  selectedOption: string;
  options: ISelectOptions[];
  placeholder: string;
  onSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select(props: SelectProps) {
  const {
    options,
    selectLabel,
    selectedOption,
    placeholder,
    onSelectionChange,
  } = props;

  return (
    <div className="select">
      {selectLabel && <span className="select__label">{selectLabel}</span>}
      <div className="select__dropdown-container">
        <select
          className="select__dropdown"
          name="selectedOption"
          onChange={onSelectionChange}
          required
          value={selectedOption}
        >
          <option value="" hidden disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
