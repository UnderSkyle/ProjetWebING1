import Card from "./Card.tsx"
import  {useEffect, useState} from "react";

function Standard(props: { category: string;}) {
    const [data, setData] = useState([]);
    const category : string = props.category;
    const mapCategory = new Map();
    mapCategory.set("1", "Nourriture");
    mapCategory.set("2", "Cabanes");
    mapCategory.set("3", "Jouets");


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
        <div className="standard-page">
            <h1>{mapCategory.get(category)} <span style={{fontSize:"0.6em"}}>{" - " + data.length + " résultats trouvés"}</span></h1>
            <div className="card-div">
                {data.map((item : { name: any; ref: any; price:any; stock: any; image: any }) => (
                    <Card name={item.name} id={item.ref} price={item.price} stock={item.stock} img={item.image} key={item.ref}></Card>
                ))}
            </div>
        </div>
        </>
    )
}

export default Standard