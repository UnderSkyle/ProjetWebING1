import React, { useEffect, useState } from 'react';

function UpdateProfile() {
    const [inputs, setInputs] = useState({first_name:"", last_name:"", email:""});
    var userId = localStorage.getItem("user");
    if (userId==null){
        window.location.href="/login";
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/getUser?userID='+userId);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const jsonData = await response.json();
                console.log(jsonData); // You can handle the response data as needed
                setInputs(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        update_account();
    }

    const update_account = ()=>{
        const data = {
            user_id:userId,
            last_name: inputs.last_name,
            first_name: inputs.first_name,
            email: inputs.email
        };
        const apiUrl = 'http://127.0.0.1:8000/posts/updateUser/';
        const requestOptions = {
            method: 'PUT',
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
                window.location.href = '/profil';
                return response.json();
            })
            .catch(err => {
            console.log(err.message);
            });
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
                                name="first_name"
                                value={inputs.first_name || ""}
                                onChange={handleChange}/>
                            <div className={inputs.first_name.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.first_name.length==0?"":"label-input-filled"} htmlFor="">Prénom*</label>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="input_data">
                            <input required type="text" 
                                name="last_name"
                                value={inputs.last_name || ""}
                                onChange={handleChange}/>
                            <div className={inputs.last_name.length==0?"underline":"underline underline-input-filled"}></div>
                            <label className={inputs.last_name.length==0?"":"label-input-filled"} htmlFor="">Nom*</label>
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
                
                <div className="form_row submit_btn">
                        <div className="input_data">
                            <input className='standard-button' type="submit" value="Mettre à jour le compte"/>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            
        </>
    )
}

export default UpdateProfile