import React, {useEffect, useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
      // tasks
  ]);

  const [input, setInput] = useState('');

  useEffect(() => {
    const tasksStorage = localStorage.getItem('tasks');
    if (tasksStorage){
      setTasks(JSON.parse(tasksStorage));
    };
    // For simule a component did amount;
    // return () => {
    //   console.log('Done!')
    // }
  }, [])

  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])


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
            <li key={task} >{task}</li>
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
