import React, { useState } from 'react';

function Login() {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        var label = document.getElementById("label-"+name);
        var underline = document.getElementById("underline-"+name)
        if (value.length>0){
            label?.classList.add("label-input-filled");
            underline?.classList.add("underline-input-filled")
        }else{
            label?.classList.remove("label-input-filled");
            underline?.classList.remove("underline-input-filled")
        }
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        login_account();
    }
    const login_account=()=>{
        const data = {
            email: inputs.email,
            password: inputs.password
        };
        const apiUrl = 'http://127.0.0.1:8000/posts/login/';
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
                    throw new Error('Network response was not ok');
                    //afficher une erreur sur la page
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem("user", JSON.stringify(data));
                
                window.location.href = '/';
              })
            .catch(err => {
            console.log(err.message);
            });
    }
    return(
        <>
        <div className="standard-page big-container-login div-form">
            <div className="container-form">
                <h1 className="text">Connexion</h1>
                <form onSubmit = {handleSubmit}>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="mail"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}/>
                                <div className="underline"></div>
                                <label id="label-email" htmlFor="">Email*</label>
                        </div>
                    </div>

                    <div className="form_row">
                        <div className="input_data">
                            <input required type="password" 
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}/>
                            <div className="underline"></div>
                            <label id="label-password" htmlFor="">Mot de passe*</label>
                        </div>
                    </div>


                    
                    <p>Vous n'avez pas de compte ? <a href="/signup">Créez-en un !</a></p>
                
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
export default Login