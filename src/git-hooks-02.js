import React, {useState, useEffect} from 'react'

export default function App() {

    const [repositories, setRepositories] = useState([

    ]);

    // useEffects is util for to simulate cycles of life;
    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/wictor-parmenis/repos')
        const data = await response.json();
        console.log(data);
        setRepositories(data);
    }, []);

    useEffect(() => {
        const filteredRepo = repositories.filter(repo => repo.favorite);
        document.title = `You has ${filteredRepo.length} favorites`
    }, [setRepositories])

    function handleFavorite(id){
        const newFavorites = repositories.map(repo => {
            return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
        });
        setRepositories(newFavorites);
    }

    return (
        <div id="app" >
            <ul>
            {repositories.map(repo => (
                <li key={repo.id}> {repo.name}
                {repo.favorite && <span>(Favorite)</span>} 
                <button onClick={() => handleFavorite(repo.id)  }>To favorite</button>
                </li>
            ))}
        </ul>
        </div>
    )}