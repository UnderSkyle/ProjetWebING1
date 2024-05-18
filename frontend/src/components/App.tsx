import {createBrowserRouter, json, Outlet, RouterProvider} from "react-router-dom";
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
import { useEffect, useState } from "react";
import Card from "./Card.tsx";



function App() {

  //var setNbObjectsCart : React.Dispatch<React.SetStateAction<number>>
  const [nbObjectsCart, setNbObjectsCart] = useState(0);
  /*try{
    const [nbObjectsCart, setNbObjectsCart] = useState(0);
  }catch{
    console.log("error");
  }*/

  const userID = localStorage.getItem("user");
  const cart = localStorage.getItem("cart")

  if (userID!=null){
    useEffect(() => {

      const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/posts/getCart?userID='+userID);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const jsonData = await response.json();
            console.log(jsonData); // You can handle the response data as needed
            var nbObjectBasket=0
            jsonData.map( (i: { quantity: number; })=> (
              nbObjectBasket+=i.quantity
            ))
          
            setNbObjectsCart(nbObjectBasket)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };

        fetchData();
    }, []);
  }else if (cart != null){
    var cartParsed = JSON.parse(cart);
    console.log(cartParsed);
    var cartitems:Map<String,any>[] = Object.values(cartParsed);
    console.log("cartitems:",cartitems);
    var nbObjectBasket=0
    cartitems.map(i=>{
      nbObjectBasket+=i["quantity"];
    })
    if (nbObjectsCart!=nbObjectBasket){
      setNbObjectsCart(nbObjectBasket);
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Header nbObjectsCart={nbObjectsCart}/> <Outlet/> <Footer/> </>,
      children: [
        {
          path: '',
          element: <Welcome/>
        },
        {
          path: 'food',
          element: <Products nbObjectsCart={nbObjectsCart} setNbObjectsCart={setNbObjectsCart} category={"1"}/>
        },
        {
          path: 'house',
          element: <Products nbObjectsCart={nbObjectsCart} setNbObjectsCart={setNbObjectsCart} category={"2"}/>
        },
        {
          path: 'toys',
          element: <Products nbObjectsCart={nbObjectsCart} setNbObjectsCart={setNbObjectsCart} category={"3"}/>
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
          element: <Basket nbObjectsCart={nbObjectsCart} setNbObjectsCart={setNbObjectsCart}/>
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


  return (
      <RouterProvider router={router}>
      </RouterProvider>
  )
}

export default App
