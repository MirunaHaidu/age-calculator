import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Result from './components/Result'
import AgeCalculator from './components/AgeCalculator'

function App() {
  const [birthdate, setBirthdate] = useState('')
  const { years, months, days, calculateAge } = AgeCalculator({ birthdate })

  const handleSubmit = (birthdate) => {
    setBirthdate(birthdate)
  }



  return (
    <div className='app'>
      <div className='app-container'>
        <Form handleSubmit={handleSubmit} />
        <Result years={years} months={months} days={days} />

      </div>
    </div>
  )
}

export default App
