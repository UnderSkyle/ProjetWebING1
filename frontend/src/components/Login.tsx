import './Form.css'
import React from 'react';
class Login extends React.Component {
    inputs: { email: string; mdp: string; };
    //let inputs;
    constructor(){
        /*const [inputs, setInputs] = useState({
            email:"",
            mdp:""
        });*/
        super(NaN)
        this.inputs={email:"",mdp:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        if (name=="email"){
            console.log(this.inputs.email)
            this.inputs.email=value
            console.log(this.inputs.email)
        }else if (name=="mdp"){
            console.log("ici")
            this.inputs.mdp=value;
        }
        //setInputs(values => ({...values, [name]:value}))
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.loginAccount();
    }
    loginAccount(){
        const data = {
            email: this.inputs.email,
            password: this.inputs.mdp
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
    }

    render(){
        return(
            <>
            <div className="big_container_login">
                <div className="container">
                    <h1 className="text">Connexion</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form_row">
                            <div className="input_data">
                                <input required type="email"
                                    name="email"
                                    value={this.inputs.email || ""}
                                    onChange={this.handleChange}/>
                                    <div className="underline"></div>
                                    <label htmlFor="">Email</label>
                            </div>
                        </div>

                        <div className="form_row">
                            <div className="input_data">
                                <input required type="text" 
                                    name="mdp"
                                    value={this.inputs.mdp || ""}
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
                    <br/><br/>
                </div>
                
            </>
        )
    }
}

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

export default Login