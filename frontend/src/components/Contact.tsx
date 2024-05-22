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
    const [messageSend, setMessageSend] = useState(false);

    const sendMail = () => {
        const data = {
            surname:inputs.prenom,
            name:inputs.nom,
            email:inputs.email,
            gender:inputs.genre,
            job:inputs.metier,
            birthdate:inputs.date,
            subject:inputs.obj,
            message:inputs.mess
        };
        const apiUrl = 'http://127.0.0.1:8000/posts/send_mail/';
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };
        
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok !');
                    //afficher une erreur sur la page
                }
            })
            .catch(err => {
            console.log(err.message);
            });
    }

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendMail();
        setMessageSend(true)
    }

    return(
        <>
        <div className="standard-page big-container-contact div-form">
            <div className="first-container-form">
                <h1 className="text">Contactez nous !</h1>
                <h2 className="text">Si vous avez une question, remplissez ce formulaire et nous vous répondrons en moins de 48h.</h2>
            </div>
            <div className="container-form container-form-contact">
                    
                <form onSubmit = {handleSubmit}>
                    
                    <div className="form_row">
                        <div className="input_data input-inline">
                            <input required type="text" 
                                name="prenom"
                                value={inputs.prenom || ""}
                                onChange={handleChange}/>
                            <div className={inputs.prenom.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.prenom.length==0?"":"label-input-filled"} htmlFor="">Prénom*</label>
                        </div>


                        <div className="input_data">
                            <input required type="text"
                                name="nom"
                                value={inputs.nom || ""}
                                onChange={handleChange}/>
                                <div className={inputs.nom.length==0?"underline":"underline underline-input-filled"}></div>
                                <label className={inputs.nom.length==0?"":"label-input-filled"} htmlFor="">Nom*</label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="input_data">
                            <input required type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}/>
                                <div className={inputs.email.length==0?"underline":"underline underline-input-filled"}></div>
                                <label className={inputs.email.length==0?"":"label-input-filled"} htmlFor="">Email*</label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="radio">
                            <span className="label-input">Genre*</span><br/>
                            <label>
                            <input type="radio" className="input_radio-form"
                                name="genre"
                                value="Femme"
                                checked = {inputs.genre == "Femme"}
                                onChange = {handleChange}
                                required/>
                                Femme</label>

                            <label>
                            <input type="radio" className="input_radio-form"
                                name="genre"
                                value="Homme"
                                checked = {inputs.genre == "Homme"}
                                onChange = {handleChange}/>
                                Homme</label>    

                            <label> 
                            <input type="radio" className="input_radio-form"
                                name="genre"
                                value="Autre"
                                checked = {inputs.genre == "Autre"}
                                onChange = {handleChange}/>
                                Autre</label> 
                        </div> 
                    </div>      
                    <div className="form_row">
                        <div className="select"><span className="label-input">Métier*</span><br/>
                            <select name = "metier" value = {inputs.metier} onChange = {handleChange}>
                                <option value="enseignant">Enseignant</option>
                                <option value="agriculteur">Agriculteur</option>
                                <option value="medecin">Médecin</option>
                                <option value="cadre">Cadre</option>
                            </select>
                        </div>
                        <div className="date">
                        <span className="label-input">Date</span><br/><label>
                                <input required type = "date"
                                                name = "date"
                                                value = {inputs.date} onChange={handleChange}/>
                            </label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="input_data">
                            <input type="text" required name="obj"
                                value={inputs.obj || ""}
                                onChange={handleChange}/>
                            <br/>
                            <div className={inputs.obj.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.obj.length==0?"":"label-input-filled"} htmlFor="">Objet du message*</label>
                            <br/>
                        </div>
                    </div>
                    

                    <div className="form_row">
                        <div className="input_data textarea">
                            <textarea required name="mess"
                                        value={inputs.mess || ""}
                                        onChange={handleChange}/>
                            <br/>
                            <div className={inputs.mess.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.mess.length==0?"":"label-input-filled"} htmlFor="">Contenu du message*</label>
                            <br/>   
                        </div>
                </div>
                <div className="form_row submit_btn">
                        <div className="input_data">
                            <input className="standard-button" type="submit" value="Envoyer"/>
                            <p id="message-send" style={{display:messageSend?"block":"none"}}>Votre message a été envoyé</p>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact
