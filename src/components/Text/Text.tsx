import React, { FC } from 'react';
import './text.scss';

type TextProps = {
    text: string
}

const Text:FC<TextProps> = ({ text }) => (
  <p className="text">
    {text}
  </p>
);

export default Text;
