import {useEffect, useState} from "react";
function Profil() {
    const [data, setData] = useState({first_name:"", last_name:"", email:""});
    var userId = localStorage.getItem("user");
    if (userId==null){
        window.location.href="/login";
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/getUser?userID='+userId);
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
        <div className='standard-page'>
            <h1>Votre profil</h1>
            <div className="container-infos-profil">
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
            </div>
            <a><button className="standard-button" role="button">Modifier</button></a>
        </div>
        </>
    )
}

export default Profil