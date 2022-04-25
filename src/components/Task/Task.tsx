import React, { FC } from 'react';
import './task.scss';
import Text from '../Text/Text';

type TaskProps = {
    id: string
    text: string
    done: boolean
}

const Task:FC<TaskProps> = ({ id, text, done }) => (
  <div className="box">
    <Text text={text} />
  </div>
);

export default Task;
