import React from 'react'
import TariffsList from './components/TariffsList/TariffsList'

export default function App() {
    return (

        <div>
            <div className="title">
            <span>Будь на волне даже при нуле</span>
            <h1>hello from react</h1>
            </div>
            <h1>Тарифы</h1>
            <TariffsList/>          
          </div>

    )
}
