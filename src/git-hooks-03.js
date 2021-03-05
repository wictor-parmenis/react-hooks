import React, {useState, useEffect} from 'react'

export default function App() {
    const [location, setLocation] = useState({});
    
    useEffect(() => {
        navigator.geolocation.watchPosition(handlePosition);
    }, []);

    function handlePosition(coordinates){
        console.log(coordinates);
    };


    return (
        
            <>
                <p>Latitude: 34.4</p><br></br>
                <p>Logintude: 33.22</p><br/>

            </>
        
    )}