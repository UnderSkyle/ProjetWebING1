import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Header/> <Outlet/> <Footer/> </>,
      children: [
        {
          path: 'food',
          element: <div>Nourriture</div>
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
          element: <div>Contact</div>
        },
        {
          path: 'login',
          element: <div>Se connecter</div>
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
