import React, { FC } from 'react';
import './vegetableListSecond.scss';

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

type VegetableListSecondProps = {
    id: string
    title: string
    description: string
    backgroundColor: string
    available: boolean
}

const VegetableListSecond:FC<VegetableListSecondProps> = ({
  id, title, description, backgroundColor, available,
}) => (
  <div>
    ddd
  </div>
);

export default VegetableListSecond;
