import './Contact.css'
import {useState} from "react";

function Contact() {
    const [inputs, setInputs] = useState({
        prenom:"",
        nom:"",
        email:"",
        genre:"Autre",
        metier:"Enseignant",
        obj:"",
        mess:""

    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Votre formulaire a été envoyé ${inputs.metier}`)
    }

    return(
        <>
        <div className="container">
                <h1 className="text">Contactez nous !</h1>
                <h2 className="text">Si vous avez une question, remplissez ce formulaire et nous vous répondrons en moins de 48h.</h2>
            <form onSubmit = {handleSubmit}>
                <div className="form_row">
                    <div className="input_data">
                        <input required type="text" 
                            name="prenom"
                            value={inputs.prenom || ""}
                            onChange={handleChange}/>
                        <div className="underline"></div>
                        <label for="">Prénom</label>
                    </div>


                    <div className="input_data">
                        <input required type="text"
                            name="nom"
                            value={inputs.nom || ""}
                            onChange={handleChange}/>
                            <div className="underline"></div>
                            <label for="">Nom</label>
                    </div>
                </div>


                <div className="form_row">
                    <div className="input_data">
                        <input required type="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}/>
                            <div className="underline"></div>
                            <label for="">Email</label>
                    </div>
                </div>


                <div className="form_row">
                    <div className="radio_container">
                        Genre<br/><br/>
                        <label className="radio_label">
                        <input type="radio" className="input_radio"
                            name="genre"
                            value="Femme"
                            checked = {inputs.genre == "Femme"}
                            onChange = {handleChange}
                            required/>
                            Femme</label>

                        <label className="radio_label">
                        <input type="radio" className="input_radio"
                            name="genre"
                            value="Homme"
                            checked = {inputs.genre == "Homme"}
                            onChange = {handleChange}/>
                            Homme</label>    

                        <label className="radio_label"> 
                        <input type="radio" className="input_radio"
                            name="genre"
                            value="Autre"
                            checked = {inputs.genre == "Autre"}
                            onChange = {handleChange}/>
                            Autre</label> 
                    </div>      
                </div>
                <div className="form_row">Métier<br/><br/>
                <select name = "metier" value = {inputs.metier} onChange = {handleChange}>
                    <option value="enseignant">Enseignant</option>
                    <option value="agriculteur">Agriculteur</option>
                    <option value="medecin">Médecin</option>
                    <option value="cadre">Cadre</option>
                </select>

                <label>Date
                    <input required type = "date"
                                    name = "date"
                                    value = {inputs.date}/>
                </label>
                </div>


                <div className="form_row">
                    <div className="input_data textarea">
                        <textarea required name="obj" rows="5" cols="8" 
                            value={inputs.obj || ""}
                            onChange={handleChange}/>
                        <br/>
                        <div className="underline"></div>
                        <label for="">Objet du message</label>
                        <br/>
                    </div>
                </div>
                

                <div className="form_row">
                    <div className="input_data textarea">
                        <textarea required name="mess" rows="5" cols="8"
                                    value={inputs.mess || ""}
                                    onChange={handleChange}/>
                        <br/>
                        <div className="underline"></div>
                        <label for="">Contenu du message</label>
                        <br/>   
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
        </>
    )
}

export default Contact
