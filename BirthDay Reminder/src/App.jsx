import { useState } from 'react'
import Data from './data';
import List from './List';
import './App.css'

function App() {
  const [people, setPeople] = useState(Data)
  
  

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthday's Today</h3>
        <List people ={people}/>
        <button onClick={() => console.log("You Clicked ME")}>
          Clear ALL 
        </button>
      </section>

    </main>
  )
}

export default App
