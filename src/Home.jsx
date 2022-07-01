const Home = ()=>{

    const handleClick = () => { 
        alert('HELLO WORLD');
    }
    const handleClickAgain = (name) => {
        alert("hello"+ name)
    }

    return(
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain("Rakesh")}>Click me again</button>
        </div>
    );
}

export default Home;