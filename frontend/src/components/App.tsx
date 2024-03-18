import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Welcome from './Welcome.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Contact from "./Contact.tsx"
import Card from "./Card.tsx"
import Login from "./Login.tsx"

const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Header/> <Outlet/> <Footer/> </>,
      children: [
        {
          path: 'welcome',
          element: <Welcome/>
        },
        {
          path: 'food',
          element: <Card/>
        },
        {
          path: 'house',
          element: <div>Cabane</div>
        },
        {
          path: 'toys',
          element: <div>Jouet</div>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'login',
          element: <Login/>
        },
      ]
    }
])


function App() {



  return (
      <RouterProvider router={router}>
      </RouterProvider>
  )
}

export default App
