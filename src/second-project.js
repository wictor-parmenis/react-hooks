import React, {useState} from 'react'

function App() {

    const [numbers, setNumbers] = useState(0);

  return (
    <div id="hooks" >
      <h2>Counter</h2>
      <hr/>
      <span>You click in button  <b>{numbers} times.</b> </span>
      <br/>
      <button onClick={() => setNumbers(numbers + 1)}>Grow</button>
    </div>
  );
}

export default App;
