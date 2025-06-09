import React from 'react';
import ReactDOM from 'react-dom/client';

const reactScriptHeader = React.createElement('h4', {id: "ReactHeading", xyz: "ABC"}, 'Hello World by React Script...!');
const rootScriptElement = ReactDOM.createRoot(document.getElementById('react-script-root'));
rootScriptElement.render(reactScriptHeader);

// Create below pattern in react
//<div id="react-nested-root">
//<div id="parent">
// <h1>Parent Header 1</h1>
// <h2>Parent Header 2</h2>
//</div>
// <div id="child">
// <h3>Child Header 1</h3>
//</div>
//</div>

const parentDiv = React.createElement('div', {id: 'parent'},
  [React.createElement('h1', null, 'Parent Header 1'),
  React.createElement('h2', null, 'Parent Header 2')]
);
const childDiv = React.createElement('div', {id: 'child'},
  React.createElement('h3', null, 'Child Header 1')
);
const nestedRootElement = ReactDOM.createRoot(document.getElementById('react-nested-root'));
nestedRootElement.render(
  React.createElement('div', {id: 'react-nested-root'}, [parentDiv, childDiv])
);
