import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
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



  return (
    <>
      <Header/>
      <div> arraera</div>
      <Footer/>
    </>
  )
}

export default App
