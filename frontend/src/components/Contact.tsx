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
        date:"15122003"

    });

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
        var csrftoken = getCookie('csrftoken');
        if (csrftoken!=null){
            var c :string = csrftoken?.valueOf();
            console.log(c);
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
    }

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        if (event.target.name!="genre" && event.target.name!="metier"){
            var label = document.getElementById("label-"+name);
            var underline = document.getElementById("underline-"+name)
            if (value.length>0){
                label?.classList.add("label-input-filled");
                underline?.classList.add("underline-input-filled")
            }else{
                label?.classList.remove("label-input-filled");
                underline?.classList.remove("underline-input-filled")
            }
        }
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendMail();
    }
    function getCookie(name: string) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    return(
        <>
        <div className="standard-page big-container-contact div-form">
            <div className="first-container-form">
            <br/>
                <h1 className="text">Contactez nous !</h1>
                <h2 className="text">Si vous avez une question, remplissez ce formulaire et nous vous répondrons en moins de 48h.</h2>
            </div>
            <div className="container-form">
                    
                <form onSubmit = {handleSubmit}>
                    
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="prenom"
                                value={inputs.prenom || ""}
                                onChange={handleChange}/>
                            <div id="underline-prenom" className="underline"></div>
                            <label id="label-prenom" htmlFor="">Prénom*</label>
                        </div>


                        <div className="input_data">
                            <input required type="text"
                                name="nom"
                                value={inputs.nom || ""}
                                onChange={handleChange}/>
                                <div id="underline-nom" className="underline"></div>
                                <label id="label-nom" htmlFor="">Nom*</label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="input_data">
                            <input required type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}/>
                                <div id="underline-email" className="underline"></div>
                                <label id="label-email" htmlFor="">Email*</label>
                        </div>
                    </div>


                    <div className="form_row">
                        <div className="radio">
                            Genre*<br/><br/>
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
                        <div className="select">Métier*<br/><br/>
                            <select name = "metier" value = {inputs.metier} onChange = {handleChange}>
                                <option value="enseignant">Enseignant</option>
                                <option value="agriculteur">Agriculteur</option>
                                <option value="medecin">Médecin</option>
                                <option value="cadre">Cadre</option>
                            </select>
                        </div>
                        
                    </div>


                    <div className="form_row">
                        <div className="input_data">
                            <input type="text" required name="obj"
                                value={inputs.obj || ""}
                                onChange={handleChange}/>
                            <br/>
                            <div id="underline-obj" className="underline"></div>
                            <label id="label-obj" htmlFor="">Objet du message*</label>
                            <br/>
                        </div>
                    </div>
                    

                    <div className="form_row">
                        <div className="input_data textarea">
                            <textarea required name="mess"
                                        value={inputs.mess || ""}
                                        onChange={handleChange}/>
                            <br/>
                            <div id="underline-mess" className="underline"></div>
                            <label id="label-mess" htmlFor="">Contenu du message*</label>
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
            </div>
        </>
    )
}

export default Contact
