import React from 'react';
import ReactDom from 'react-dom';

// Create a react compoonent

const App = () => {
const butttonText = { text: 'Click Me Dude' };
const labelText = 'Enter Name: '

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {butttonText.text}
      </button>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
