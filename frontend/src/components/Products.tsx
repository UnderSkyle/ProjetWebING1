import Card from "./Card.tsx"
import  {useEffect, useState} from "react";

function Standard(props: {nbObjectsCart:number, setNbObjectsCart : React.Dispatch<React.SetStateAction<number>>, category: string;}) {
    const [data, setData] = useState([]);
    const [text_button, setTextButton] = useState("Afficher le stock");
    const category : string = props.category;
    const mapCategory = new Map();
    mapCategory.set("1", "Nourriture");
    mapCategory.set("2", "Cabanes");
    mapCategory.set("3", "Jouets");
    const [stockPrinted, setStockPrinted] = useState(false);


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

    const printStock=()=>{
        setStockPrinted(!stockPrinted);
        if (!stockPrinted){
            var textsStock = document.getElementsByClassName("stock-card");
            for (var i=0;i<textsStock.length;i++){
                (textsStock[i] as HTMLElement).style.setProperty("display","block")
            }
            setTextButton("Ne pas afficher le stock");
        }else{
            var textsStock = document.getElementsByClassName("stock-card");
            for (var i=0;i<textsStock.length;i++){
                (textsStock[i] as HTMLElement).style.setProperty("display","none")
            }
            setTextButton("Afficher le stock");
        }
    }

    return(
        <>
        <div className="standard-page">
            <div className="top-products-page">
                <div>
                    <h1>{mapCategory.get(category)}</h1>
                    <h2>{data.length + " résultats trouvés"}</h2>
                </div>
                <button className="standard-button" id="button-print-stock" onClick={printStock}>{text_button}</button>
            </div>
            <div className="card-div">
                {data.map((item : { name: any; ref: any; price:any; stock: any; image: any }) => (
                    <Card nbObjectsCart={props.nbObjectsCart} setNbObjectsCart={props.setNbObjectsCart} name={item.name} id={item.ref} price={item.price} stock={item.stock} img={item.image} key={item.ref}></Card>
                ))}
            </div>
        </div>
        </>
    )
}

export default Standard