import CardOrder from "./CardOrder.tsx"
import {useEffect, useState} from "react";
import CardBasket from "./CardBasket.tsx";

function Order() {
    const [data, setData] = useState<any | null>([]);
    const userID = localStorage.getItem("user");


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/getOrders?userID='+userID);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const jsonData = await response.json();
                console.log(jsonData)
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
            <h1>Vos commandes</h1>
            {Array.isArray(data) ? (
                data.map(item => (
                    <CardOrder
                        key={item.id}
                        numOrder={item.id}
                        numArticles={item.order_items.reduce((total, item) => total + item.quantity, 0)}
                        date={item.placed_at}
                        status={'En route'}
                        price={item.order_items.reduce((total, item) => total + (item.quantity * item.product_price), 0)}
                    />
                ))
            ) : (
                <CardOrder
                    key={data.id}
                    numOrder={data.id}
                    numArticles={data.order_items.reduce((total, item) => total + item.quantity, 0)}
                    date={data.placed_at}
                    status={'En route'}
                    price={data.order_items.reduce((total, item) => total + (item.quantity * item.product_price), 0)}
                />
            )}
        </>
    )
}

export default Order