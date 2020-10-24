import React from 'react';
import ReactDom from 'react-dom';

// Create a react compoonent

const App = () => {
  return <div> Hi There</div>;
};

ReactDom.render(<App />, document.querySelector('#root'));