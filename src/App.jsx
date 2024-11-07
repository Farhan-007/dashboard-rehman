import { useState } from 'react'
import './App.css'
import CommonContainer from './CommonContainer'
import InventoryDetails from './Pages01/index'

function App() {

  return (
    <>
      <main className=''>

        <CommonContainer>
          <InventoryDetails />
        </CommonContainer>
      </main>
    </>
  )
}

export default App
