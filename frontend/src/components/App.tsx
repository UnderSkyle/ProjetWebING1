import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Welcome from './Welcome.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Contact from "./Contact.tsx"
import Login from "./Login.tsx"
import SignUp from "./SignUp.tsx"
import StandardPage from "./StandardPage.tsx"
import Account from "./Account.tsx"
import Profil from "./Profil.tsx"
import Order from "./Order.tsx"
import Address from "./Address.tsx"
import OrderDone from "./OrderDone.tsx"
import AddAddress from "./AddAddress.tsx"
import Basket from "./Basket.tsx";



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
          element: <StandardPage/>
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
          path: 'basket',
          element: <Basket/>
        },
        {
          path: 'account',
          element: <Account/>
        },
        {
          path: 'profil',
          element: <Profil/>
        },
        {
          path: 'order',
          element: <Order/>
        },
        {
          path: 'address',
          element: <Address/>
        },
        {
          path: 'done',
          element: <OrderDone/>
        },
        {
          path: 'add',
          element: <AddAddress/>
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
