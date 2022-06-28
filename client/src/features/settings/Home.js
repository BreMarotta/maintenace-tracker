import React, { useEffect, useState } from 'react'


const Home = () => {
    const [count, setCount] = useState("");

    useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
    }, []);


  return (
    <div>Home
        <h1>Page Count: {count}</h1>

    </div>
  )
}

export default Home