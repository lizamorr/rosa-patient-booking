import React from 'react';
import './button.scss';

interface ButtonProps {
  buttonText: string;
  hasRightArrow: boolean;
  onClick: (event: React.FormEvent) => void;
}

export const Button = (props: ButtonProps) => {
  const { buttonText, hasRightArrow, onClick } = props;
  return (
    <div className="button__container">
      <button onClick={onClick} type="submit">
        {buttonText && buttonText}
        {hasRightArrow && (
          <i className="arrow-right fa-solid fa-arrow-right"></i>
        )}
      </button>
    </div>
  );
};

export default Button;
