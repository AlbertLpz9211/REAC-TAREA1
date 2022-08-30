import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import ColorBackground from './components/ColorBackground'
import quotes from './quotes.json'
import Button from './components/Button'
import Author from './components/Author'


function App() {
  //Colors Arrays
  const colors=['#5e62c2','#c261b9','#ff6c9b','#ff9277','#ffc461']  
  //set random index for quotes
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const [Index,setIndex]= useState(randomIndex)
  //set ramdom index for colors
    const randomIndexC = Math.floor(Math.random()*colors.length)
    const [IndexC, setIndexC] =useState(randomIndexC)
  //function by set Random's Index's
  function changeColor () {
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const randomIndexC = Math.floor(Math.random()*colors.length)
    setIndex(randomIndex)
    setIndexC(randomIndexC)
  }

  return (
    <div className="App">
      <div className="card">
      <ColorBackground colors={colors[IndexC]} IndexC={IndexC}/>
      <QuoteBox quote={quotes[Index].quote} colors={colors[IndexC]}/>
      <Author author={quotes[Index].author} colors={colors[IndexC]}/>
      <Button changeColor={changeColor} colors={colors[IndexC]}/>
      </div>
    </div>
  )
}

export default App
