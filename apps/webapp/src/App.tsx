import { Button } from '@core/ui';
import { Say } from '@core/lib';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const increase = () => {
    setState(prev => prev + 1);
  };

  const handleClick = () => {
    window.alert(Say.say('Hello!'));
  };

  return (
    <>
      <h1>Hello World!</h1>
      <Button onClick={handleClick}>hi</Button>
      <h2>{state}</h2>
      <Button onClick={increase}></Button>
    </>
  );
}

export default App;
