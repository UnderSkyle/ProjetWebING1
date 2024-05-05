import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Welcome from './Welcome.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Contact from "./Contact.tsx"
import Login from "./Login.tsx"
import SignUp from "./SignUp.tsx"
import Products from "./Products.tsx"
import Account from "./Account.tsx"
import Profil from "./Profil.tsx"
import Order from "./Order.tsx"
import Address from "./Address.tsx"
import OrderDone from "./OrderDone.tsx"
import AddAddress from "./AddAddress.tsx"
import Basket from "./Basket.tsx";

import './Account.css';
import './Address.css';
import './Basket.css';
import './Card.css';
import './Footer.css';
import './Form.css';
import './Header.css';
import './Order.css';
import './OrderDone.css';
import './Products.css';
import './Profil.css';
import './StandardPage.css';
import './Welcome.css';
import UpdateProfile from "./UpdateProfile.tsx";

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
          element: <Products category={"1"}/>
        },
        {
          path: 'house',
          element: <Products category={"2"}/>
        },
        {
          path: 'toys',
          element: <Products category={"3"}/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'login',
          element: <Login order={false}/>
        },
        {
          path: 'signup',
          element: <SignUp order={false}/>
        },
        {
          path: 'login/order',
          element: <Login order={true}/>
        },
        {
          path: 'signup/order',
          element: <SignUp order={true}/>
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
          path: 'profil/modify',
          element: <UpdateProfile/>
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
