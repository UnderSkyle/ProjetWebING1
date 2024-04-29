import './Form.css'
import {useState} from "react";

function AddAddress() {
    const [inputs, setInputs] = useState({
        prenom:"",
        nom:"",
        codePostal:"",
        ville:"",
        adresse:"",
        complement:""

    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Votre adresse a été enregristré`)
    }

    return(
        <>
        <div className="big_container_contact">
            <br/><br/><br/>
            <div className="first_container">
                <h1 className="text">Ajouter une adresse</h1>
            </div>
            <div className="container">
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
                            <input
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
                            <input 
                                name="adresse"
                                value={inputs.adresse || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Adresse (numéro et rue) </label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input 
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
                            <input type="submit" value="submit"/>
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
