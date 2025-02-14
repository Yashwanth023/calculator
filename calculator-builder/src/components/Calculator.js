import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import useStore from '../store';
import { calculate } from '../utils/calculate';

const Calculator = () => {
  const { components } = useStore();
  const [input, setInput] = useState('');

  const handleButtonClick = (label) => {
    if (label === '=') {
      setInput(calculate(input));
    } else if (label === 'C') {
      setInput('');
    } else {
      setInput((prev) => prev + label);
    }
  };

  return (
    <Droppable droppableId="calculator">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="calculator"
        >
          <input
            type="text"
            value={input}
            readOnly
            className="calculator-input"
          />
          {components.map((component, index) => (
            <div key={component.id} className="calculator-button" onClick={() => handleButtonClick(component.label)}>
              {component.label}
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Calculator;