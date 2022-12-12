import { useState } from "react";


const HookSwitcher = () => {

  const [ color, setColor ] = useState('inherit');

  return (
    <div style={{ padding: '10px', backgroundColor: color }} >
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setColor('white')}>White</button>
    </div>
  );
  };

  export default HookSwitcher;