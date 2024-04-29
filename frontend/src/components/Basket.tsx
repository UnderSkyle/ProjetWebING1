import './CardPages.css';
import CardBasket from './CardBasket.tsx'
import {useEffect, useState} from "react";
function Basket() {
    const [data, setData] = useState([]);
    const userID = localStorage.getItem("user");


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

    return(
        <>
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
                <a href="#blocks-know-more"><button className="LinkButton" role="button">Passer la commande</button></a>
            </div>
        </>
    )
}

export default Basket