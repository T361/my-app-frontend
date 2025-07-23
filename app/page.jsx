'use client'
import Title from './Title'
import "./page.css"
import "./Title"
import Titledesp from './Titledesp'
import Card from './card'
import Belowcard from './Belowcard'
function App() {
  return (
    <div className="container"> 
    <div className="child1">
      <Title />
    </div>
     <div className="child2">
      <Card/>
      <Belowcard/>
      </div> 
    </div>
  )
}
export default App