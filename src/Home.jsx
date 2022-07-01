import { useState } from "react";

const Home = ()=>{
    const [name, setName] = useState('Ram');
    const [age, setAge] = useState(25);
    const handleClick = () => { 
        setName('Shyam');
        setAge(26);
    }
    

    return(
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
    );
}

export default Home;