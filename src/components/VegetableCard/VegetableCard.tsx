import React, { FC } from 'react';
import './vegetableCard.scss';
import Title from '../Title/Title';
import Id from '../Id/Id';
import Description from '../Description/Description';
import Button from '../Button/Button';

type VegetableCardProps = {
    id: string
    title: string
    description: string
    backgroundColor: string
    available?: boolean
}

const VegetableCard:FC<VegetableCardProps> = ({
  id, title, description, backgroundColor, available,
}) => (
  <div className="box">
    <div className="card" style={{ backgroundColor }}>
      <div className="row__first">
        <Title title={title} />
        <Id id={id} />
      </div>
      <div className="row__second">
        <Description description={description} />
      </div>
      <div className="row__third">
        Button
      </div>
    </div>
  </div>
);

export default VegetableCard;
