import './CardPages.css';
import CardBasket from './CardBasket.tsx'
import {useEffect, useState} from "react";
function Basket() {
    const [data, setData] = useState<any | null>([]);
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
                    setData(jsonData);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, []);
    }else if (cart != null && data.length==0){
        var cartParsed = JSON.parse(cart);
        console.log(cartParsed);
        var cartitems = Object.values(cartParsed);
        console.log(cartitems);
        setData(cartitems);
    }

    return(
        <>
        <div className='card-pages'>
            <h1>Votre panier</h1>
            {Array.isArray(data) ? (
                data.map(item => (
                    <CardBasket
                        name={item.name}
                        quantity={item.quantity}
                        id={item.ref}
                        price={item.price}
                        img={item.image}
                        key={item.ref}
                    />
                ))
            ) : (
                <CardBasket
                    name={data.name}
                    quantity={data.quantity}
                    id={data.ref}
                    price={data.price}
                    img={data.image}
                    key={data.ref}
                />
            )}
            <div>
                <h3>Total : &euro;</h3>
                <a href="/order/choose_address"><button className="LinkButton-card" role="button">Passer la commande</button></a>
            </div>
        </div>
        </>
    )
}

export default Basket