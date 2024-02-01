import { useState, useEffect } from 'react'
import headgehog_img from '../assets/logo.png'
import './App.css'

function App() {
  // @ts-ignore
  const [data, setData] = useState([])

  useEffect(()=> {
    async function fetchData(){
    console.log(import.meta.env.VITE_API_URL)
    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}posts`)
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
    fetchData();
  }, []);

  const HandleClick = () => {
    console.log(data)
  }

  return (
    <>
      <img src={headgehog_img} alt="react_logo" className="logo" />
      <h1 onClick={HandleClick}>Hello World</h1>
    </>
  )
}

export default App
