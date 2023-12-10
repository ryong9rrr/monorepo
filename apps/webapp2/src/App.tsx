// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { Say } from '@core/lib';
import './App.css';
import { Button } from '@core/ui';

function App() {
  // const [count, setCount] = useState(0);

  const handleClick = () => {
    window.alert(Say.say('Hello'));
  };

  return (
    <>
      <h1>Hello Vite!</h1>
      <Button onClick={handleClick}>click me</Button>
    </>
  );
}

export default App;
