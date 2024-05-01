import './CardPages.css'


function CardAddress({id,name,surname,address,postalCodeTown,complementary_info,choice, onClick,refer}) {
    var divId = "address_"+id;

    const deleteAddress = () => {
        var user_id = localStorage.getItem("user");
        const data = {
            id_user:user_id,
            id_address:id
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
            <div onClick={onClick} ref={refer} id={divId} className="container-card container-card-address">
                <h3 className="address-name">{name} {surname}</h3>
                <h4 className="address-info">{address}</h4>
                <h4 className="address-info">{postalCodeTown}</h4>
                <h4 className="address-info">{complementary_info}</h4>
                <br/>
                <div className="grid-card-address">
                    <a href={choice ? "http://localhost:5173/order/address/modify/"+id : "http://localhost:5173/address/modify/"+id}><button className="LinkButton-card" role="button">Modifier</button></a>
                    <span onClick={deleteAddress} className="icon-delete-address material-symbols-outlined">delete</span>
                </div>
            </div>
            <br/>

        </>
    )
}

export default CardAddress