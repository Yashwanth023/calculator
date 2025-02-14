import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import useStore from './store';
import ComponentList from './components/ComponentList';
import Calculator from './components/Calculator';

const predefinedComponents = [
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '4', label: '4' },
  { id: '5', label: '5' },
  { id: '6', label: '6' },
  { id: '7', label: '7' },
  { id: '8', label: '8' },
  { id: '9', label: '9' },
  { id: '0', label: '0' },
  { id: 'add', label: '+' },
  { id: 'subtract', label: '-' },
  { id: 'multiply', label: '*' },
  { id: 'divide', label: '/' },
  { id: 'equals', label: '=' },
  { id: 'clear', label: 'C' },
];

const App = () => {
  const { addComponent, setComponents } = useStore();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    predefinedComponents.forEach(component => {
      addComponent(component);
    });
  }, [addComponent]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(predefinedComponents);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setComponents(items);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="app-container">
          <ComponentList components={predefinedComponents} />
          <Calculator />
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;