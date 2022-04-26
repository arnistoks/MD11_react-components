import React, { FC } from 'react';
import './vegetableListSecond.scss';
import VegetableCard from '../VegetableCard/VegetableCard';

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
  },
];

const VegetableListSecond = () => (
  <div className="vegetables__box">
    {vegetables.map(({
      id, title, description, backgroundColor, available,
    }) => (available ? (
      <VegetableCard
        id={id}
        title={title}
        description={description}
        backgroundColor={backgroundColor}
      />
    ) : null
    ))}
  </div>
);

export default VegetableListSecond;
