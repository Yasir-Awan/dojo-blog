const Home = () => {

    const handleClick = () => {
        console.log('Hello, Ninjas!')
    }
    const handleClickAgain = (name) =>{
        console.log('hello' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>{
                console.log('hello');
                handleClickAgain('yasir');
            }}>Click me Again</button>
        </div>
    );
}

export default Home;