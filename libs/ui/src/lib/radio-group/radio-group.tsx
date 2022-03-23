import React from 'react';
import './radio-group.scss';

interface RadioGroupProps {
  radioInput: RadioGroupInput[];
  radioLabel: string;
  radioAnswer: string;
  onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface RadioGroupInput {
  type: string;
  name: string;
  value: string;
  id?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export function RadioGroup(props: RadioGroupProps) {
  const { radioInput, radioLabel, onRadioChange, radioAnswer } = props;
  return (
    <div className="radio-group">
      {radioLabel && <span className="radio-group__label">{radioLabel}</span>}
      <div className="radio-group__input-container">
        {radioInput.map((input, index) => (
          <div key={index} className="radio-group__input">
            <input
              key={index}
              type={input.type}
              name={input.name}
              id={input.id}
              value={input.value}
              checked={input.value === radioAnswer}
              required={input.required}
              onChange={onRadioChange}
            />
            {input.id && input.label && (
              <label htmlFor={input.id}>{input.label}</label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;
