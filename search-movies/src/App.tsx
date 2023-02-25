import { useState } from 'react';
import './App.css'
import { NoResult, Result } from './interfaces';
import responseData from "./mocks/with-result.json"

function App() {
  const [responseMovies, setresponseMovies] = useState<Result>();
  const [whitoutResults, setwhitoutResults] = useState<NoResult>();

  console.log(responseData)
  return (
    <div>
      <header className='search'>
        <h1>Movies Serach</h1>
        <form className='form'>
          <input type="search" placeholder='' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>

      </main>
    </div>
  )
}

export default App
