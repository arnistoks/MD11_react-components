import React, { FC } from 'react';
import './description.scss';

type DescriptionProps = {
    description: string
}

const Description:FC<DescriptionProps> = ({ description }) => (
  <p className="description">
    {description}
  </p>
);

export default Description;
