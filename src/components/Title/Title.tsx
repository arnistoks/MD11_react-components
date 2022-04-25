import React, { FC } from 'react';
import './title.scss';

type TitleProps = {
    title: string
}

const Title:FC<TitleProps> = ({ title }) => (
  <h1 className="title">
    {title}
  </h1>
);

export default Title;
