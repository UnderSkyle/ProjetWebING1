import React, { useState } from 'react';

function Login(props:{order:boolean}) {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
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
                var userId=JSON.stringify(data);
                localStorage.setItem("user", userId);
                completeCart(userId);
                localStorage.removeItem("cart");
                window.location.href = props.order ? '/basket' :'/';
              })
            .catch(err => {
            console.log(err.message);
            });
    }

    const completeCart = (userId:string) => {
        var cartJson = localStorage.getItem("cart");
        if (cartJson!=null) {
            var cartParsed = JSON.parse(cartJson.valueOf());
            var cartitems = Object.values(cartParsed);
            const data = {
                id_user: userId,
                items: cartitems
            };
            const apiUrl = 'http://127.0.0.1:8000/posts/completeCart/';
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
                .catch(err => {
                    console.log(err.message);
                });
        }
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
                                <div className={inputs.email.length==0?"underline":"underline underline-input-filled"}></div>
                                <label className={inputs.email.length==0?"":"label-input-filled"} htmlFor="">Email*</label>
                        </div>
                    </div>

                    <div className="form_row">
                        <div className="input_data">
                            <input required type="password" 
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}/>
                            <div className={inputs.password.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.password.length==0?"":"label-input-filled"} htmlFor="">Mot de passe*</label>
                        </div>
                    </div>


                    
                    <p>Vous n'avez pas de compte ? <a href={props.order ? "/signup/order" :"/signup"}>Créez-en un !</a></p>
                
                <div className="form_row submit_btn">
                        <div className="input_data">
                            <input className='standard-button' type="submit" value="Se connecter"/>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            
        </>
    )
}
export default Login