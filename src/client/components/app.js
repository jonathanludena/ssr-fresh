import React, { useState } from 'react';

const App = (props) => {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div>
      <h1>Hola SSR</h1>
      <button onClick={handleClick}>Toggle</button>
      <ul>
        {!hide && props.items.map(item =>
          <li key={item.id}>{item.label}</li>
        )}
      </ul>
    </div>
  );
};

App.defaultProps = {
  items: []
};

export default App;
