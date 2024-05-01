import CardOrder from "./CardOrder.tsx"
import {useEffect, useState} from "react";

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
                console.log(jsonData); // You can handle the response data as needed
                setData(jsonData);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
            <h1>Vos commandes</h1>
            <CardOrder
                numOrder={'001'}
                numArticles={'2'}
                date={'Chez 29/04/2024'}
                status={'En route'}
                price={'30'}
            />

        </>
    )
}

export default Order