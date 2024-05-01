import { useNavigate, useParams } from 'react-router-dom';
import './Form.css'
import {useEffect, useState} from "react";

function AddAddress({order}) {
    const { idAddress } = useParams();
    const [inputs, setInputs] = useState({
        prenom:"",
        nom:"",
        codePostal:"",
        ville:"",
        adresse:"",
        complement:""

    });

    if (idAddress!=null){
        useEffect(() => {

            const fetchData = async () => {
                try {
                    const response = await fetch('http://127.0.0.1:8000/posts/getAddress?idAddress='+idAddress);
                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }
                    const jsonData = await response.json();
                    console.log(jsonData); // You can handle the response data as needed
                    setInputs(jsonData);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }, []);
    }

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (idAddress==null){
            addAddress();
        }else{
            modifyAddress();
        }
    }

    const addAddress = () => {
        var user = localStorage.getItem("user");
        const data = {
            id_user: user,
            first_name: inputs.prenom,
            last_name: inputs.nom,
            street: inputs.adresse,
            postal_code: inputs.codePostal,
            city: inputs.ville,
            complementary_info: inputs.complement
        };
        const apiUrl = 'http://127.0.0.1:8000/posts/createAddress/';
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok !');
                    //afficher une erreur sur la page
                }
                if (order){
                    window.location.href='../../choose_address'
                }else{
                    window.location.href = '../';
                }
                
            })
            .catch(err => {
            console.log(err.message);
            });
    }

    const modifyAddress = () => {
        var user = localStorage.getItem("user");
        const data = {
            id_user: user,
            id_address: idAddress,
            first_name: inputs.prenom,
            last_name: inputs.nom,
            street: inputs.adresse,
            postal_code: inputs.codePostal,
            city: inputs.ville,
            complementary_info: inputs.complement
        };
        const apiUrl = 'http://127.0.0.1:8000/posts/updateAddress/';
        const requestOptions = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok !');
                    //afficher une erreur sur la page
                }
                if (order){
                    window.location.href='../../choose_address'
                }else{
                    window.location.href = '../';
                }
                
            })
            .catch(err => {
            console.log(err.message);
            });
    }


    return(
        <>
        <div className="big_container_contact div-form">
            <br/><br/><br/>
            <div className="container-form">
                <h1 className="text">Ajouter une adresse</h1>
                <form onSubmit = {handleSubmit}>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="prenom"
                                value={inputs.prenom || ""}
                                onChange={handleChange}/>
                            <div className="underline"></div>
                            <label htmlFor="">Prénom</label>
                        </div>


                        <div className="input_data">
                            <input required type="text"
                                name="nom"
                                value={inputs.nom || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Nom</label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="input_data">
                            <input type="text" required
                                name="codePostal"
                                value={inputs.codePostal || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Code Postal </label>
                        </div>
                        <div className="input_data">
                            <input required type="text"
                                name="ville"
                                value={inputs.ville || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Ville </label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input type="text" required
                                name="adresse"
                                value={inputs.adresse || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Adresse (numéro et rue) </label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input type="text" required
                                name="complement"
                                value={inputs.complement || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Complément d'adresse </label>
                        </div>
                    </div>
                <div className="form_row submit_btn">
                        <div className="input_data">
                            <div className="inner"></div>
                            <input type="submit" value="Valider"/>
                        </div>
                </div>
                </form>
                
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
        </>
    )
}

export default AddAddress
