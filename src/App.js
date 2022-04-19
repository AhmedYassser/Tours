import './App.css';
import { useEffect, useState } from 'react';
import Tours from './componants/Tours';
import axios from 'axios';

function App() {
  const [tours, setTours] = useState([]);

  function removetour (id){
    const newTours = tours.filter( (tour)=> tour.id !== id );
    setTours(newTours);

  }

  async function Gettours() {
    let { data } = await axios.get('https://course-api.com/react-tours-project');
    setTours(data)
  }
  
  useEffect(() => {
    Gettours();
  }, [])


  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => Gettours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  
  return (
    <>
      <Tours tours={tours} removetour={removetour}/> 
    </>
  );
}

export default App;
