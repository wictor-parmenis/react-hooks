import React, {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
      "Study react with hooks",
      "Apply react hooks in a project"
  ]);

  const [input, setInput] = useState('');

  function handleAdd(){
    setTasks([
      ...tasks, input
    ])
  };


  return (
    <div id="hooks" >
      <h2>Hooks</h2>
      <hr></hr>
      <ul>
        {tasks.map(task => (
            <li key="task" >{task}</li>
        ))
        }
      </ul>
      <br/>
      <input type="text" placeholder="Insert new task here" value={input} 
      onChange={(e) => setInput(e.target.value)} ></input>
      <br></br>
      <button  type="button" onClick={handleAdd} >New task</button>
    </div>
  );
}

export default App;
