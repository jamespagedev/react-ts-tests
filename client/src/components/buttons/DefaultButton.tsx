import React from 'react';

function DefaultButton(): JSX.Element {
  function handleButtonClick() {
    console.log('Default Button Clicked');
  }
  return <button onClick={handleButtonClick}>Click Me</button>;
}

export default DefaultButton;
