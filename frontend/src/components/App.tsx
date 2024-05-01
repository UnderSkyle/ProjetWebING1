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
          element: <StandardPage category={"1"}/>
        },
        {
          path: 'house',
          element: <StandardPage category={"2"}/>
        },
        {
          path: 'toys',
          element: <StandardPage category={"3"}/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'login',
          element: <Login history={""}/>
        },
        {
          path: 'signup',
          element: <SignUp history={""}/>
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
          element: <Address choice={false}/>
        },
        {
          path: 'order/choose_address',
          element: <Address choice={true}/>
        },
        {
          path: 'order/done',
          element: <OrderDone/>
        },
        {
          path: 'address/add',
          element: <AddAddress order={false}/>
        },
        {
          path: 'address/modify/:idAddress',
          element: <AddAddress order={false}/>
        },
        {
          path: 'order/address/add',
          element: <AddAddress order={true}/>
        },
        {
          path: 'order/address/modify/:idAddress',
          element: <AddAddress order={true}/>
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
