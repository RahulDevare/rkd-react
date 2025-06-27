import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement-JS Object => HTMLElement (Rendered in DOM with render())
const reactScriptHeader = React.createElement(
  'h4',
  { id: "ReactHeading", xyz: "ABC" },
  'React Element by React createElement Function...!'
);

console.log(reactScriptHeader); // ReactElement-JS Object

// JSX (transpiled to React.createElement by Babel or other transpilers)(PARCEL uses Babel)
// JSX => React.createElement => ReactElement-JS Object => HTMLElement (Rendered in DOM with render())
const jsxHeader = <h4 id="JSXHeading" xyz="XYZ">Hello World by JSX single line...!</h4>;

console.log(jsxHeader); // ReactElement-JS Object - this is the same as reactScriptHeader
// JSX with multiple lines - elclosed in parentheses
// Note: JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
const jsxHeaderMultiLine = (
  <h4 id="JSXHeadingMultiLine" xyz="XYZ">
    Hello World by JSX multi line...!
  </h4>
);

// React Component
// Class Based Component - OLD
// Functional Component - NEW (just a JS function returning JSX)
// Functional components starts with a capital letter
// There are multiple ways to create a functional component in React.
// 1. Functional Component using function declaration with curly brace, should return JSX
const FunctionalComponent1 = () => {
  return <h4 id="FunctionalHeading" xyz="XYZ">Hello World by Functional Component...!</h4>;
}
// 2. Functional Component using arrow function
const FunctionalComponent2 = () => (
  <h4 id="FunctionalHeadingArrow" xyz="XYZ">Hello World by Functional Component Arrow...!</h4>
);
// 3. Functional Component using function expression
const FunctionalComponent3 = function() {
  return <h4 id="FunctionalHeadingExpression" xyz="XYZ">Hello World by Functional Component Expression...!</h4>;
}
// 4. Functional Component using arrow function with implicit return
const FunctionalComponent4 = () => <h4 id="FunctionalHeadingImplicit" xyz="XYZ">Hello World by Functional Component Implicit...!</h4>;

// Note: All the above functional components are stateless functional components.
// They do not have state or lifecycle methods.

// Below are examples of functional components with props and destructuring.
// We will practice them later
// 5. Functional Component using function declaration with props
const FunctionalComponentWithProps = (props) => {
  return <h4 id="FunctionalHeadingProps" xyz={props.xyz}>Hello World by Functional Component with Props...!</h4>;
}
// 6. Functional Component using function declaration with props and destructuring
const FunctionalComponentWithDestructuredProps = ({ xyz }) => {
  return <h4 id="FunctionalHeadingDestructuredProps" xyz={xyz}>Hello World by Functional Component with Destructured Props...!</h4>;
}
// 7. Functional Component using function declaration with props and default props
const FunctionalComponentWithDefaultProps = ({ xyz = "Default XYZ" }) => {
  return <h4 id="FunctionalHeadingDefaultProps" xyz={xyz}>Hello World by Functional Component with Default Props...!</h4>;
}
// 8. Functional Component using function declaration with props and default props and destructuring
const FunctionalComponentWithDefaultDestructuredProps = ({ xyz = "Default XYZ" }) => {
  return <h4 id="FunctionalHeadingDefaultDestructuredProps" xyz={xyz}>Hello World by Functional Component with Default Destructured Props...!</h4>;
}

//Component composition
// 1. Functional Component using function declaration with component composition
const CombineHeadingsComponent = () => {
  return (
    <div id="CombineHeadingsComponent">
      <FunctionalComponent1></FunctionalComponent1>
      <FunctionalComponent2 />
      {FunctionalComponent3()}
      <FunctionalComponent4 />
      {reactScriptHeader} {/* Injecting js in component */}
    </div>
  );
}

const rootScriptElement = ReactDOM.createRoot(document.getElementById('react-script-root'));
rootScriptElement.render(<CombineHeadingsComponent />);