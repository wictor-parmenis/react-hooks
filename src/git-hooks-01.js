import React, {useState} from 'react'

export default function App() {

    const [repositories, setRepositories] = useState([
        {id: 1, name: 'repo-1'},
        {id: 2, name: 'repo-2'},
        {id: 3, name: 'repo-3'}
    ]);

    function newRepo(){
        setRepositories([...repositories, {id: Math.random(), name: 'nre-repo'}])
    }

    return (
        <div id="app" >
            <ul>
            {repositories.map(repo => (
                <li key={repo.id}> {repo.name} </li>
            ))}
        </ul>
        <br></br>
        <button onClick={newRepo}>New Repo</button>
        </div>
    )}