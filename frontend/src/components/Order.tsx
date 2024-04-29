import CardOrder from "./CardOrder.tsx"
function Order() {


    return(
        <>
            <h1>Vos commandes</h1>
            <CardOrder
                numOrder={'001'}
                numArticles={'2'}
                date={'Chez 29/04/2024'}
                status={'En route'}
                price={'30'}
            />

        </>
    )
}

export default Order