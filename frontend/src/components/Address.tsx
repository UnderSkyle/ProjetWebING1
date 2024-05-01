import './CardPages.css';
import CardAddress from "./CardAddress.tsx"
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
function Address({choice}) {
    const [data, setData] = useState<any | null>([]);
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
        if (ref.current!=null){
            setWidth(ref.current.offsetWidth);
            setHeight(ref.current.offsetHeight);
        }
    }
  
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('load', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('load', handleWindowResize);
      
    };
  }, []);
  
  const userID = localStorage.getItem("user");
  useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/posts/getAddresses?user_id='+userID);
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
    var chosenAddress: {}={};
    const selectAddress = (id:any) => {
        if (choice){
            data.forEach((item) => {
                var itemId = "address_"+item.id;
                document.getElementById(itemId)?.style.setProperty('background-color', "#ffffff");
                if (item.id==id){
                    chosenAddress=item;
                }
            })
            var divId = "address_"+id;
            document.getElementById(divId)?.style.setProperty('background-color', "#F4EEB4");
            document.getElementById("bt-validation-choice-address")?.style.setProperty('visibility','visible');
        }
    }

    /*const getCart = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/posts/getCart?userID='+userID);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };*/

    const finishOrder = async () => {
        if (Object.keys(chosenAddress).length>0) {
            console.log(chosenAddress)
            //var cart = await getCart();
            //console.log(cart);
            const OrderData = {
                user_id:userID,
                address_id:chosenAddress.id,
            };

            const apiUrl = 'http://127.0.0.1:8000/posts/createOrder/';
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(OrderData),
            };

            fetch(apiUrl, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                        //afficher une erreur sur la page
                    }
                    return response.json();
                })
                .then(() => {
                    console.log("Success");
                })
                .catch(err => {
                    console.log(err.message);
                });
            window.location.href = '/order/done';
        }
    }

    const button_validate_commande=choice ? <button id="bt-validation-choice-address" style={{visibility: 'hidden'}} onClick={finishOrder}>Valider</button> : <></>;

    return(
        <>
        <div className="address-page">
            <h1>Vos adresses</h1>
            <div className='div-address-cards'>
            {Array.isArray(data) ? (
                data.map(item => (
                    <CardAddress
                        key={item.id}
                        id={item.id}
                        name={item.first_name}
                        surname={item.last_name}
                        address={item.street}
                        postalCodeTown={item.postal_code +" "+ item.city}
                        complementary_info={item.complementary_info}
                        choice={choice}
                        refer={ref}
                        onClick={()=>selectAddress(item.id)}
                    />
                ))
            ) : (
                <CardAddress
                    key={data.id}
                    id={data.id}
                    name={data.first_name}
                    surname={data.last_name}
                    address={data.street}
                    postalCodeTown={data.postal_code +" "+ data.city}
                    complementary_info={data.complementary_info}
                    choice={choice}
                    refer={ref}
                    onClick={()=>selectAddress(data.id)}
                />
            )}
                <a href={choice?'address/add/':'../../address/add/'} style={{width: width, height: height}} className="container-card-address container-card-add-address">
                    <div className='content-container-card-add-address'>
                        <span className="material-symbols-outlined icon-add-address">add</span>
                        <p className='address-name'>Ajouter une adresse</p>
                    </div>
                    
                </a>
            </div>
            {button_validate_commande}
        </div>
        </>
    )
}

export default Address