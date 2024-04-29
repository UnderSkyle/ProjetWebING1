import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Welcome from './Welcome.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Contact from "./Contact.tsx"
import Card from "./Card.tsx"
import Login from "./Login.tsx"
import SignUp from "./SignUp.tsx";
import Temp from "./Temp.tsx";

const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Header/> <Outlet/> <Footer/> </>,
      children: [
        {
          path: '',
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
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'test',
          element: <Temp category={'1'}></Temp>
        }
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
