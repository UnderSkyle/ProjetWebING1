import React, { useState, useEffect } from "react";

function MyComponent(props: { category: string;}) {
    const [data, setData] = useState([]);
    const category = props.category;


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/getProducts?category_id='+props.category);
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



    return (
        <div>
            <h1>Data from Django API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.name}>{item.name} {item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
