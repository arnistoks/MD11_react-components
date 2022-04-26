import React, { FC } from 'react';
import './id.scss';

type IdProps = {
    id: string
}

const Id:FC<IdProps> = ({ id }) => (
  <p className="id">
    {id}
  </p>
);

export default Id;
