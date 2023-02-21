import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/greeting'
import Random from './components/random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <BoxColor r={255} g={0} b={0} />
        <IdCard
                  lastName='Doe'
                  firstName='John'
                  gender='male'
                  height={178}
                  birth={new Date("1992-07-14").toISOString().split("T")[0]}
                  picture="https://res.cloudinary.com/dqqdwbrhs/image/upload/v1676975497/jean-wimmerlin-YxDENE4HgMM-unsplash_1_zeceph.jpg"
        />
      </div>
      <Greetings lang="de">John</Greetings>
      <Random min={1} max={6} />
       <CreditCard
        type="Visa"
        number="0123456789012345"
        expirationMonth={3}
        expirationYear={2025}
        bank="Big Bank, Inc."
        owner="John Doe"
        bgColor="#393939"
        color="white"
      /> 
      <div>
        <BoxColor r={128} g={255} b={0}/>
      <IdCard
                    lastName='Delores '
                    firstName='Obrien'
                    gender='female'
                    height={172}
                    birth={new Date("1988-05-11").toDateString().split("T")[0]}
                    picture="https://res.cloudinary.com/dqqdwbrhs/image/upload/v1676982413/ahmed-galal-d3BWBM9-4dc-unsplash_1_epl7d1.jpg"
        />
      </div>
      <Greetings lang="es">Obrien</Greetings>
      <Random min={1} max={6} />
    </div>
  )
}

export default App
