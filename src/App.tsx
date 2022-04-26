import React from 'react';
import './App.scss';
import Task from './components/Task/Task';
import VegetableListFirst from './components/VegetableListFirst/VegetableListFirst';
import VegetableListSecond from './components/VegetableListSecond/VegetableListSecond';

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
];

const App = () => (
  <section className="section">
    <div className="container">
      {tasks.map((task) => (
        task.done ? (
          <div className="lineThrough">
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
            />
          </div>
        ) : (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
          />
        )
      ))}
    </div>
    <div className="container">
      {tasks.map((task) => (
        task.done ? null : <Task key={task.id} id={task.id} text={task.text} done={task.done} />
      ))}
    </div>
    <div className="container container__cards">
      <VegetableListFirst />
    </div>
    <div className="container container__cards">
      <VegetableListSecond />
    </div>
  </section>
);

export default App;
