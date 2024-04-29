import Card from "./Card.tsx"
import './StandardPage.css'
function Standard() {


    return(
        <>
        <div className="CardDiv">
            <Card
            name={'Nom'}
            id={'001'}
            price={'10'}
            stock={'10'}
          />
          <Card
            name={'Nom'}
            id={'001'}
            price={'10'}
            stock={'10'}
          />
          <Card
            name={'Nom'}
            id={'001'}
            price={'10'}
            stock={'10'}
          />
          <Card
            name={'Nom'}
            id={'001'}
            price={'10'}
            stock={'10'}
          />
          <Card
            name={'Nom'}
            id={'001'}
            price={'10'}
            stock={'10'}
          />
          <Card
            name={'Nom'}
            id={'001'}
            price={'10'}
            stock={'10'}
          />
        </div>
        </>
    )
}

export default Standard