import React from 'react'
import Header from './Header'
import SidePanel from './SidePanel'
import Body from './Body'

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <SidePanel />
        <Body />
      </div>
    </div>
  )
}

export default App
