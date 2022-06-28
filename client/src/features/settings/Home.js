import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const Home = () => {
  const loggedIn = useSelector((state) => state.owners.loggedin);
  console.log(loggedIn)
    const [count, setCount] = useState("");

    useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
    }, []);
  
    if (loggedIn){
      return (
        <div>
          Home
        </div>
      )
    } else {

    return (
      <div>Home
          <h1>Page Count: {count}</h1>

      </div>
    )
    }
}

export default Home