import './Contact.css'
import {useState} from "react";

function Contact() {
    const [inputs, setInputs] = useState({
        prenom:"invité",
        nom:"invité",
        email:"invite@gmail.com",
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
            <form onSubmit = {handleSubmit}>
                <label className="formInputText">Prénom
                    <input required type="text" 
                            name="prenom"
                            value={inputs.prenom || ""}
                            onChange={handleChange}/>
                </label>
                <label className="formInputText">Nom
                    <input required type="text"
                            name="nom"
                            value={inputs.nom || ""}
                            onChange={handleChange}/>
                </label>
                <label className="formInputText">Email
                    <input required type="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}/>
                </label>

                Genre
                    <input type="radio"
                            name="genre"
                            value="Femme"
                            checked = {inputs.genre == "Femme"}
                            onChange = {handleChange}
                            required/>
                    <label>Femme</label>

                    <input type="radio"
                            name="genre"
                            value="Homme"
                            checked = {inputs.genre == "Homme"}
                            onChange = {handleChange}/>
                    <label>Homme</label>    

                    <input type="radio"
                            name="genre"
                            value="Autre"
                            checked = {inputs.genre == "Autre"}
                            onChange = {handleChange}/>
                    <label>Autre</label>        


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

                <label>Objet du message
                    <textarea required name="obj"
                            value={inputs.obj || ""}
                            onChange={handleChange}/>
                </label>
                <label>Contenu du message
                    <textarea required name="mess"
                            value={inputs.mess || ""}
                            onChange={handleChange}/>
                </label>

                <input className="submitButton" type="submit"/>
            </form>
        </>
    )
}

export default Contact
