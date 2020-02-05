import React from 'react'
import TariffsList from './components/TariffsList/TariffsList'

export default function App() {
    return (

        <div>
            <div className="title">
            <span>Будь на волне даже при нуле</span>
            </div>
            <h1>Тарифы</h1>
            <TariffsList/>          
          </div>

    )
}
