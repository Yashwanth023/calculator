import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ComponentList = ({ components }) => {
  return (
    <div className="component-list">
      {components.map((component, index) => (
        <Draggable key={component.id} draggableId={component.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="component-item"
            >
              {component.label}
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default ComponentList;