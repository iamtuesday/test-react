import { useEffect, useState } from 'react'
import './App.css'
import { TestingService } from './services';
import { ToastContainer } from 'react-toastify';
import { addNotification } from './assets/utilities';

function App() {
  const [morty, setMorty] = useState({} as any);

  const fetchMorty = async () => {
    const { data } = await TestingService()
    setMorty(data)
  }
  useEffect(() => {
    fetchMorty()
  }, [])
  return (
    <div className="App">
      {JSON.stringify(morty)}
      <button onClick={addNotification}>Add notificaiton</button>
      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  )
}

export default App
