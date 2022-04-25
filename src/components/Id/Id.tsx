import React, { FC } from 'react';
import './id.scss';

type IdProps = {
    id: string
}

const Id:FC<IdProps> = ({ id }) => (
  <p id={id} />
);

export default Id;
