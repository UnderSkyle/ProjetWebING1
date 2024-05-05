import React, { useState } from 'react';

function SignUp(props:{order:boolean}) {
    const [inputs, setInputs] = useState({
        surname:"",
        name:"",
        email:"",
        password:"",
        confirm_password:""
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
        if (name=="confirm_password"){
            var input_confirm_pwd = document.getElementById("input-confirm-pwd")
            if (inputs.password!=value){
                (input_confirm_pwd as HTMLInputElement).setCustomValidity("Les mots de passe ne sont pas identiques");
            }else{
                (input_confirm_pwd as HTMLInputElement).setCustomValidity("");
            }
        }else if (name=="password"){
            var input_confirm_pwd = document.getElementById("input-confirm-pwd")
            if (inputs.confirm_password!=value){
                (input_confirm_pwd as HTMLInputElement).setCustomValidity("Les mots de passe ne sont pas identiques");
            }else{
                (input_confirm_pwd as HTMLInputElement).setCustomValidity("");
            }
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        create_account();
    }

    const create_account = ()=>{
        const data = {
            name: inputs.name,
            surname: inputs.surname,
            email: inputs.email,
            password: inputs.password
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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    //afficher une erreur sur la page
                }
                return response.json();
            })
            .then(data => {
                console.log("Success");
                var userId = JSON.stringify(data);
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
                <h1 className="text">Création de compte</h1>
                <form onSubmit = {handleSubmit}>
                <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="surname"
                                value={inputs.surname || ""}
                                onChange={handleChange}/>
                            <div className={inputs.surname.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.surname.length==0?"":"label-input-filled"} htmlFor="">Prénom*</label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="name"
                                value={inputs.name || ""}
                                onChange={handleChange}/>
                            <div className={inputs.name.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.name.length==0?"":"label-input-filled"} htmlFor="">Nom*</label>
                        </div>
                    </div>
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
                    <div className="form_row">
                        <div className="input_data">
                            <input required id="input-confirm-pwd" type="password" 
                                name="confirm_password"
                                value={inputs.confirm_password || ""}
                                onChange={handleChange}/>
                            <div className={inputs.confirm_password.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.confirm_password.length==0?"":"label-input-filled"} htmlFor="">Confirmer votre mot de passe*</label>
                        </div>
                    </div>


                    
                    <p>Vous avez déjà un compte ? <a href={props.order ? "/login/order" :"/login"}>Connectez-vous !</a></p>
                
                <div className="form_row submit_btn">
                        <div className="input_data">
                            <input className='standard-button' type="submit" value="Créer un compte"/>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            
        </>
    )
}

/*function signup(email: string, password: string, name: string, surname: string){
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

export default SignUp*/

/*interface RouterProps {
    history: string;
  }
  
  type Props = RouterProps;
  
  type State = {
    name: string,
    surname: string,
    email: string,
    password: string
  };

class SignUp extends React.Component<Props, State> {
    inputs: { email: string; mdp: string; };
    //let inputs;
    constructor(props: Props){
       
        super(props)
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: ""
          };
        this.inputs={email:"",mdp:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event : any) => {
        const nameEvent = event.target.name
        if (nameEvent=="name"){
            this.setState({name:event.target.value})
        }else if (nameEvent=="surname"){
            this.setState({surname:event.target.value})
        }else if (nameEvent=="email"){
            this.setState({email:event.target.value})
        }else if (nameEvent=="password"){
            this.setState({password:event.target.value})
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.create_account();
    }
    create_account(){
        const data = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    //afficher une erreur sur la page
                }
                return response.json();
            })
            .then(data => {
                console.log("Success");
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href = '/';
              })
            .catch(err => {
            console.log(err.message);
            });
    }

    render(){
        return(
            <>
            <div className="standard-page big-container-login div-form">
                <div className="container-form">
                    <h1 className="text">Connexion</h1>
                    <form onSubmit = {this.handleSubmit}>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="name"
                                value={this.state.name || ""}
                                onChange={this.handleChange}/>
                            <div className="underline"></div>
                            <label htmlFor="">Prénom</label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="surname"
                                value={this.state.surname || ""}
                                onChange={this.handleChange}/>
                            <div className="underline"></div>
                            <label htmlFor="">Nom</label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="mail"
                                name="email"
                                value={this.state.email || ""}
                                onChange={this.handleChange}/>
                                <div className="underline"></div>
                                <label htmlFor="">Email</label>
                        </div>
                    </div>

                    <div className="form_row">
                        <div className="input_data">
                            <input required type="password" 
                                name="password"
                                value={this.state.password || ""}
                                onChange={this.handleChange}/>
                            <div className="underline"></div>
                            <label htmlFor="">Mot de passe</label>
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
}*/

/*function LoginAccount(email: string, password: string){
    const navigate = useNavigate()
    const data = {
        email: email,
        password: password
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
        .then(response => response.json())
        .then((d) => {
            //redirect to welcome ou à la page précédente
        })
        .catch(err => {
          console.log(err.message);
        });
}*/

export default SignUp