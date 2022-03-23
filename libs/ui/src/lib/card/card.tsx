import React from 'react';
import './card.scss';

interface CardProps {
  cardHeader: string;
  cardContent: JSX.Element;
}

export const Card = (props: CardProps) => (
  <div className="card">
    <div className="card__container">
      <h2 className="card__header">{props.cardHeader}</h2>
      {props.cardContent}
    </div>
  </div>
);

export default Card;
