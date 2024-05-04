function CardAddress(props: {id:any,name: string,surname: string,address: string,postalCodeTown: string,complementary_info: string,choice: boolean, onClick: any,refer: any}) {
    var divId = "address_"+props.id;

    const deleteAddress = () => {
        var user_id = localStorage.getItem("user");
        const data = {
            id_user:user_id,
            id_address:props.id
        };
        const apiUrl = 'http://127.0.0.1:8000/posts/deleteAddress/';
        const requestOptions = {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok !');
                    //afficher une erreur sur la page
                }
                window.location.reload();
            })
            .catch(err => {
            console.log(err.message);
            });
        
    };

    return(
        <>
            <div onClick={props.onClick} ref={props.refer} id={divId} className="standard-card container-card-address">
                <h3 className="address-name">{props.name} {props.surname}</h3>
                <h4 className="address-info">{props.address}</h4>
                <h4 className="address-info">{props.postalCodeTown}</h4>
                <h4 className="address-info">{props.complementary_info}</h4>
                <br/>
                <div className="grid-card-address">
                    <a href={props.choice ? "http://localhost:5173/order/address/modify/"+props.id : "http://localhost:5173/address/modify/"+props.id}><button className="standard-button" role="button">Modifier</button></a>
                    <span onClick={deleteAddress} className="icon-delete-address material-symbols-outlined">delete</span>
                </div>
            </div>
            <br/>

        </>
    )
}

export default CardAddress