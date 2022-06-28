import React from 'react'
import { useSignup } from './API'

const Signup = () => {
  const { data, error, isLoading } = useSignup("Bob", "1234")
  return (
    <div>
      <h1>Hello?</h1>
        {error ? (
            <>Oh no, there was an error </>
        // ) : isLoading ? (
        //     <>Loading...</>
        ) : data ? (
            <>
            <h3>{data}</h3>
            </>
        ) : null}
    </div>
  )
}

export default Signup
