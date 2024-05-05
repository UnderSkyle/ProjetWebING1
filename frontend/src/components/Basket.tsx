import CardBasket from './CardBasket.tsx'
import {Key, useEffect, useState} from "react";
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
    var total=0;
    Array.isArray(data) ? (
        data.map(item => (
            total+=item.price * item.quantity
        ))
    ) : (
        total+=data.price * data.quantity
    )


    return(
        <>
        <div className='standard-page'>
            <h1>Votre panier</h1>
            <div className='content-basket-page'>
                <div className='basket-cards'>
                {
                    data.map((item: { name: any; quantity: any; ref: Key | null | undefined; price: any; image: any; }) => (
                        <CardBasket
                            name={item.name}
                            quantity={item.quantity}
                            id={item.ref}
                            price={item.price}
                            img={item.image}
                            key={item.ref}
                        />
                    ))
                }
                </div>
                <div className='standard-card basket-total-order'>
                    <h3>Total : {total} &euro;</h3>
                    <a className={total==0?"disabled":""} href={userID!=null ? "/order/choose_address" : "/login/order"}>
                        <button className="standard-button" disabled={total==0} role="button">Passer la commande</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Basket