import './Profil.css';
import {useEffect, useState} from "react";
function Profil() {
    const [data, setData] = useState([]);
    const userID = localStorage.getItem("user");

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/getUser?userID='+userID);
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
        <link rel="presonnect" href="https://fonts.googleapis.com"/>
        <link rel="presonnect" href="https://fonts.gstatic.com"/>
        <br/><br/><br/><br/>
        <div className='profil-page'>
            <h1>Votre profil</h1>
            <br/><br/><br/>
            <div className="bordure-profil"><p></p></div>
            <div className="bigcontainer-profil">
                <span className="material-symbols-outlined-card material-symbols-outlined icon-profil">person</span>
                <div className="grid-profil">
                    <h3>Nom</h3>
                    <p>{data.first_name} {data.last_name}</p>
                </div>
            </div>

            <div className="bordure-profil"><p></p></div>

            <div className="bigcontainer-profil">
                <span className="material-symbols-outlined-card material-symbols-outlined icon-profil">mail</span>
                <div className="grid-profil">

                    <h3>Adresse e-mail</h3>
                    <p>{data.email}</p>
                    
                </div>    
            </div>
            <div className="bordure-profil"><p></p></div>
            <br/><br/>
            <a><button className="LinkButton-profil" role="button">Modifier</button></a>
            <br/><br/>
        </div>
        </>
    )
}

export default Profil