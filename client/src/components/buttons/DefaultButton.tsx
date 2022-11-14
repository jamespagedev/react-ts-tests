import React from 'react';

interface Props {
  btnText: string;
  updateParentState: () => void;
}

function DefaultButton({btnText, updateParentState}: Props): JSX.Element {
  function handleButtonClick() {
    console.log(btnText);
    updateParentState();
  }
  return <button onClick={handleButtonClick}>{btnText}</button>;
}

export default DefaultButton;
