import './Form.css'
import {useState} from "react";

function Login() {
    const [inputs, setInputs] = useState({
        surname:"",
        name:"",
        email:"",
        password:""
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        signup(inputs.email,inputs.password,inputs.name,inputs.surname)
    }

    return(
        <>
        <div className="big_container_login">
            <div className="container">
                <h1 className="text">Création de compte</h1>
                <form onSubmit = {handleSubmit}>
                <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="surname"
                                value={inputs.surname || ""}
                                onChange={handleChange}/>
                            <div className="underline"></div>
                            <label htmlFor="">Prénom</label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="name"
                                value={inputs.name || ""}
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
                        <div className="input_data">
                            <input required type="password" 
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}/>
                            <div className="underline"></div>
                            <label htmlFor="">Mot de passe</label>
                        </div>
                    </div>


                    
                    <p>Vous avez déjà un compte ? <a href="/login">Connectez-vous !</a></p>
                
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

function signup(email: string, password: string, name: string, surname: string){
    const data = {
        email: email,
        password: password,
        name: name,
        surname: surname
      };
    const apiUrl = 'http://127.0.0.1:8000/posts/signup/';
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      
      fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .catch(err => {
          console.log(err.message);
        });
}

export default Login