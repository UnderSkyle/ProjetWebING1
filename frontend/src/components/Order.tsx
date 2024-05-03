import CardOrder from "./CardOrder.tsx"
import {Key, useEffect, useState} from "react";

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
        <div className="standard-page">
            <h1>Vos commandes</h1>
            {data.map((item: { id: Key | null | undefined; order_items: any[]; placed_at: any; }) => (
                    <CardOrder
                        key={item.id}
                        image={item.order_items[0].product_image}
                        numOrder={item.id}
                        numArticles={item.order_items.reduce((total, item) => total + item.quantity, 0)}
                        date={item.placed_at}
                        status={'En route'}
                        price={item.order_items.reduce((total, item) => total + (item.quantity * item.product_price), 0)}
                    />
                ))}
        </div>
        </>
    )
}

export default Order