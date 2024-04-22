import './Contact.css'
import {useState} from "react";

function Login() {
    const [inputs, setInputs] = useState({
        email:"",
        mdp:""
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return(
        <>
        <div className="big_container">
            <div className="container">
                <h1 className="text">Connexion</h1>
                <form onSubmit = {handleSubmit}>
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
                        <div className="input_data">
                            <input required type="text" 
                                name="mdp"
                                value={inputs.mdp || ""}
                                onChange={handleChange}/>
                            <div className="underline"></div>
                            <label for="">Mot de passe</label>
                        </div>
                    </div>


                    
                    <p>Vous n'avez pas de compte ? Créez-en un !</p>
                
                <div className="form_row submit_btn">
                        <div className="input_data">
                            <div className="inner"></div>
                            <input type="submit" value="submit"/>
                        </div>
                    </div>
                </form>
                </div>
                <br/><br/>
            </div>
            
        </>
    )
}

export default Login