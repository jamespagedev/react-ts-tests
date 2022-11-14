import React, {useState} from 'react';
import {DefaultButton} from './components/buttons';

function App() {
  const [strParentState, setStrParentState] = useState('');
  return (
    <div className="app">
      {/* Test Components Here */}
      <h3>strParentState: &quot;{strParentState}&quot;</h3>
      <DefaultButton btnText="Click Me" updateParentState={() => setStrParentState('Default Button')} />
    </div>
  );
}

export default App;
