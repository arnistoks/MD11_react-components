import React, { FC } from 'react';
import './vegetableListFirst.scss';

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

type VegetableListFirstProps = {
  id: string
  title: string
  description: string
  background: string
  available: boolean
}

const VegetableListFirst:FC<VegetableListFirstProps> = ({
  id, title, description, background, available,
}) => (
  <div>
    sss
  </div>
);

export default VegetableListFirst;
