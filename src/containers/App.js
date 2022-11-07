import React,{ useState, useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/searchBox'
import Scroll from '../components/Scroll'

  function App() {

      const [robots, setRobots] = useState([])
      const [searchfield, setSearchfield] = useState('')
      const [count,setCount] = useState(0)

      useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(users =>
                      setRobots(users)
                  )
          console.log(count)
      },
          [count])//only

      const onSerchedCahnged = (event) => {
          setSearchfield(event.target.value)
          console.log(event.target.value)
      }
      const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase())
          //console.log(filteredRobots)

      })
      console.log(robots,searchfield)
      if (!robots.length) {
          <h1>Loading</h1>
      } else {
          return (
              <div
                  className='center-m'>
                  <h1>Robot Friends</h1>
                  <button onClick={()=>setCount(count+1)}>Click me!</button>
                  <SearchBox serchChange={onSerchedCahnged}/>
                  <Scroll>
                      <CardList robots={filteredRobots}/>
                  </Scroll>
              </div>
          )
      }

  }
  export default App