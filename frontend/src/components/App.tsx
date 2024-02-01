import { useState, useEffect } from 'react'
import react_img from '../assets/stickers-sticker-herisson.jpg'

function App() {
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

  return (
    <>
      <img src={react_img} alt="react_logo" className="logo"/>
      <h1>Hello World</h1>
    </>
  )
}

export default App
