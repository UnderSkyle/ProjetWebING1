import Card from "./Card.tsx"
import './StandardPage.css'
import  {useEffect, useState} from "react";

function Standard(props: { category: string;}) {
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
    }, [category]);


    return(
        <>
        <div className="card-div">
            {data.map(item => (
                <Card name={item.name} id={item.ref} price={item.price} stock={item.stock} img={item.image} key={item.ref}></Card>
            ))}
        </div>
        </>
    )
}

export default Standard