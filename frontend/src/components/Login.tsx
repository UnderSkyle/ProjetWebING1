import './Form.css'
import React from 'react';

interface RouterProps {
    history: string;
  }
  
  type Props = RouterProps;
  
  type State = {
    email: string,
    password: string
  };

class Login extends React.Component<Props, State> {
    inputs: { email: string; mdp: string; };
    //let inputs;
    constructor(props: Props){
        /*const [inputs, setInputs] = useState({
            email:"",
            mdp:""
        });*/
        super(props)
        this.state = {
            email: "",
            password: ""
          };
        this.inputs={email:"",mdp:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event : any) => {
        const nameEvent = event.target.name
        if (nameEvent=="email"){
            this.setState({email:event.target.value})
        }else{
            this.setState({password:event.target.value})
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.login_account();
    }
    login_account(){
        const data = {
            email: this.state.email,
            password: this.state.password
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

    render(){
        return(
            <>
            <div className="big-container-login">
                <div className="container-form">
                    <h1 className="text">Connexion</h1>
                    <form onSubmit = {this.handleSubmit}>
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
                                <input required type="text" 
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