import React from 'react'
import { styles } from './styles/body'
import Title from './Title'
import Content from './Content'

const Body = () => {
  return (
    <div style={styles}>
      <Title />
      <Content />
    </div>
  )
}

export default Body
