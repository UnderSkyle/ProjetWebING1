import './Form.css'
import {useState} from "react";

function Contact() {
    const [inputs, setInputs] = useState({
        prenom:"",
        nom:"",
        email:"",
        genre:"Autre",
        metier:"Enseignant",
        obj:"",
        mess:"",
        date:""

    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Votre formulaire a été envoyé ${inputs.prenom}`)
    }

    return(
        <>
        <div className="big_container_contact">
            <br/><br/><br/>
            <div className="first_container">
                <h1 className="text">Contactez nous !</h1>
                <h2 className="text">Si vous avez une question, remplissez ce formulaire et nous vous répondrons en moins de 48h.</h2>
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
                            <input required type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Email</label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="radio">
                            Genre<br/><br/>
                            <label>
                            <input type="radio" className="input_radio"
                                name="genre"
                                value="Femme"
                                checked = {inputs.genre == "Femme"}
                                onChange = {handleChange}
                                required/>
                                Femme</label>

                            <label>
                            <input type="radio" className="input_radio"
                                name="genre"
                                value="Homme"
                                checked = {inputs.genre == "Homme"}
                                onChange = {handleChange}/>
                                Homme</label>    

                            <label> 
                            <input type="radio" className="input_radio"
                                name="genre"
                                value="Autre"
                                checked = {inputs.genre == "Autre"}
                                onChange = {handleChange}/>
                                Autre</label> 
                        </div> 
                    </div>      
                    <div className="form_row">
                        <div className="select">Métier<br/><br/>
                            <select name = "metier" value = {inputs.metier} onChange = {handleChange}>
                                <option value="enseignant">Enseignant</option>
                                <option value="agriculteur">Agriculteur</option>
                                <option value="medecin">Médecin</option>
                                <option value="cadre">Cadre</option>
                            </select>
                        </div>
                        <div className="date">
                            Date<label><br/><br/>
                                <input required type = "date"
                                                name = "date"
                                                value = {inputs.date}/>
                            </label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="input_data">
                            <input type="text" required name="obj"
                                value={inputs.obj || ""}
                                onChange={handleChange}/>
                            <br/>
                            <div className="underline"></div>
                            <label htmlFor="">Objet du message</label>
                            <br/>
                        </div>
                    </div>
                    

                    <div className="form_row">
                        <div className="input_data textarea">
                            <textarea required name="mess"
                                        value={inputs.mess || ""}
                                        onChange={handleChange}/>
                            <br/>
                            <div className="underline"></div>
                            <label htmlFor="">Contenu du message</label>
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
                <br/><br/><br/><br/><br/><br/>
            </div>
        </>
    )
}

export default Contact
